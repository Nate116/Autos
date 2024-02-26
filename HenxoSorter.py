import os
from shutil import move

# Define the Downloads folder path
downloads_path = os.path.expanduser('~/Downloads')

# File extension categories
video_extensions = ['.mp4', '.mov', '.wmv', '.avi', '.mkv']
audio_extensions = ['.mp3', '.wav', '.aac', '.flac', '.m4a']
image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp']

# Function to sort files into respective folders
def sort_files():
    # Ensure target folders exist
    for folder in ['Videos', 'Audio', 'Images']:
        os.makedirs(os.path.join(downloads_path, folder), exist_ok=True)

    # Sort files
    for filename in os.listdir(downloads_path):
        if filename.startswith('.'):  # Skip hidden files
            continue
        file_path = os.path.join(downloads_path, filename)
        if os.path.isfile(file_path):
            file_extension = os.path.splitext(filename)[1].lower()
            if file_extension in video_extensions:
                move(file_path, os.path.join(downloads_path, 'Videos', filename))
            elif file_extension in audio_extensions:
                move(file_path, os.path.join(downloads_path, 'Audio', filename))
            elif file_extension in image_extensions:
                move(file_path, os.path.join(downloads_path, 'Images', filename))

if __name__ == '__main__':
    sort_files()
