import path from 'path';
import fs from 'fs';

export default async function handler(req, res) {
    const mediaPath = path.join(process.cwd(), 'public/media');

    try {
      const files = await fs.promises.readdir(mediaPath);

      const videos = await Promise.all(
        files.map(async (file) => {
          const filePath = path.join(mediaPath, file);
          const stats = await fs.promises.stat(filePath);

          return {
            filename: file,
            modified: stats.mtime.toISOString(),
          };
        })
      );

      const sortedVideos = videos.sort((a, b) => new Date(b.modified) - new Date(a.modified));

      res.json(sortedVideos);
    } catch (err){
      console.error(err);
      res.status(500).send('Internal Server Error')
    }
}