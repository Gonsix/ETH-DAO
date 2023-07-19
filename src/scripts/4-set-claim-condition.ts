// NFT mint 

import { MaxUint256 } from '@ethersproject/constants';

import sdk from './1-initialize-sdk.js';
import { editionDropAddress } from './module.js';

const editionDrop = sdk.getContract(editionDropAddress, 'edition-drop');

(async () => {
    try {
        // オブジェクトの配列を渡すことで、条件を設定できます
        // 必要であれば、複数の条件をそれぞれ異なる時期に設定することもできます
        // FYI: https://docs.thirdweb.com/typescript/sdk.tokendrop.claimconditions#tokendropclaimconditions-property
        const claimConditions = [
            {
                // いつからミントできるようになるか
                startTime: new Date(),
                // max limitation
                maxQuantity: 50_000,
                // NFT price
                price: 0,
                // max limitation per one transaction
                quantityLimitPerTransaction: 1,
                // cool down time
                waitInSecond: MaxUint256,
            },
        ];

        await (await editionDrop).claimConditions.set('0', claimConditions);
        console.log('✅ Successfully set claim condition!');

    } catch (error) {
        console.error('Failed to set claim condition', error);
    }
})();
