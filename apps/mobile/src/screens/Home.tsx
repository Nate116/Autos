import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

export default function Home() {
  const [marts, setMarts] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${process.env.EXPO_PUBLIC_API}/marts/nearby`, {
        params: { lat: 6.4541, lng: 3.3942, radiusKm: 5 }
      });
      setMarts(data);
    })();
  }, []);

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '600' }}>Nearby Marts</Text>
      <FlatList
        data={marts}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={{ paddingVertical: 12, borderBottomWidth: 1, borderColor: '#eee' }}>
            <Text style={{ fontSize: 16 }}>{item.displayName}</Text>
            <Text style={{ color: '#666' }}>{item.city} • ⭐ {item.ratingAvg.toFixed(1)}</Text>
          </View>
        )}
      />
    </View>
  );
}
