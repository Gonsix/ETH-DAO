import { readFileSync } from 'fs';

import sdk from './1-initialize-sdk.js';
import { editionDropAddress } from './module.js';

// 先ほどメモして残していた editionDrop のコントラクトアドレスをインポートするか、こちらに記載してください
const editionDrop = sdk.getContract(editionDropAddress, 'edition-drop');

(async () => {
  try {
    await (
      await editionDrop
    ).createBatch([
      {
        name: "Member's symbol",
        description:
          'SNG DAO  にアクセスすることができる限定アイテムです',
        image: readFileSync('src/scripts/assets/gori.jpeg'),
      },
    ]);
    console.log('✅ Successfully created a new NFT in the drop!');
  } catch (error) {
    console.error('failed to create the new NFT', error);
  }
})();
