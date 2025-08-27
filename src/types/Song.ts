export type Song = {
  id: string;
  author: string;
  name: string;
};

export function getMockSong(): Song {
  return {
    id: 'song123',
    author: 'Ed Sheeran',
    name: 'Azizam',
  };
}
