import { exec } from "node:child_process";
import periodicTable from "./assets/data/periodic-table-data.json";

const main = () => {
	const elements = periodicTable.elements;

	for (let element of elements) {
		exec(
			`npx @threlte/gltf@latest ${element.bohr_model_3d} -o src/lib/models/${element.name}.svelte -t -i`,
			(error, stdout, stderr) => {
				if (error) {
					console.error(`exec error: ${error}`);
					return;
				}

				if (stderr) {
					console.error(`stderr: ${stderr}`);
					return;
				}

				console.log(`stdout: ${stdout}`);
			}
		);
	}
};

main();
