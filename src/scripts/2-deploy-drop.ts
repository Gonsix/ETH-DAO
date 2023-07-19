import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFile, readFileSync } from "fs";

(async () => {
    try {
        const editionDropAddress = await sdk.deployer.deployEditionDrop({
            name: "Shingo DAO Collective", 
            description: "A DAO for Shingo DAO(test)",
            image: readFileSync("src/scripts/assets/gorimeta.jpeg"),

            primary_sale_recipient: AddressZero,

        });

        const editionDrop = sdk.getContract(editionDropAddress, "edition-drop");

        const metadata = await (await editionDrop).metadata.get();

        // Display the address of editionDrop contract
        console.log(
            "✅ Successfully deployed editionDrop contract, address:",
            editionDropAddress
        );

        // editionDrop コントラクトのメタデータを出力
        console.log("✅ editionDrop metadata:", metadata);

    } catch (error) {
        console.log("failed to deploy editionDrop contract", error);
    }
})();

