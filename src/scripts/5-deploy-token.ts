import {AddressZero } from '@ethersproject/constants';
import sdk from "./1-initialize-sdk.js";

(async () =>{
    try {
        const tokenAddress = await sdk.deployer.deployToken({
            name: "SNG DAO Gavernance Token",
            symbol: "SNG",
            primary_sale_recipient: AddressZero,
        });
        console.log(
            "✅ Successfully deployed token module, address:",
            tokenAddress
        );
    } catch (error) {
        console.error("failed to deploy token module", error);
    }
})();
