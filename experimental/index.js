
const puppeteer = require('puppeteer');
const jsdom = require("jsdom");

async function getDebtData() {
    console.log("Running...")

    let browser;

    try {
        browser = await puppeteer.launch();
        const page = await browser.newPage();
        page.setDefaultNavigationTimeout(2 * 60 * 1000);
        await page.goto('https://www.aguascordobesas.com.ar');
        
        
        const result = await page.evaluate(async () => {
            let finalData;

            const url = "https://www.aguascordobesas.com.ar/espacioClientes/recursos/includesActions/inc_gestionDeuda.php";

            const headers = new Headers({
                "authority": "www.aguascordobesas.com.ar",
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "en,en-US;q=0.9",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "cookie": "PHPSESSID=6b61acd8f2ed5f5102ce27439b183368; _ga=GA1.3.302030102.1682642740; _gid=GA1.3.1865832530.1682642740; _fbp=fb.2.1682642739634.688096471; _gat=1",
                "origin": "https://www.aguascordobesas.com.ar",
                "referer": "https://www.aguascordobesas.com.ar/espacioClientes/seccion/gestionDeuda/consulta/231920",
                "sec-ch-ua": '"Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"Windows"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
                "x-requested-with": "XMLHttpRequest"
            });

            const formData = new URLSearchParams({
                uf: "231920",
                tu: "C",
                token: "d119e223097213f31a604b959a019864",
                actions: "get-deuda"    
            });

            console.log("1")

            const data = await fetch(url, {
                method: "POST",
                headers: headers,
                body: formData
            })

            finalData = await data.json();
            return finalData;

        });

        const doc = new jsdom.JSDOM(result.data.datosHtmlDeuda).window.document;
        const elemsPeriodo = doc.querySelectorAll('td[data-title="Periodo"]');
        const elemsImporte = doc.querySelectorAll('td[data-title="Importe $"]');
        const elemsEstado = doc.querySelectorAll('td[data-title="Estado"]');

        console.log("\n----------------------------------");

        console.log("Numeros de Importes Encontrados: ", elemsPeriodo.length);

        console.log("----------------------------------");

        elemsEstado.forEach((elem, index) => {
            if (elem.textContent === "No Vencido") {
                console.log("Periodo: ", elemsPeriodo[index].textContent);
                console.log("Importe: ", elemsImporte[index].textContent);
                console.log("Estado: ", elem.textContent);
            }
        });

        console.log("---------------------------------- \n");
        
        await browser.close();

    } catch (error) {
        console.error(error);
        await browser.close();
    }

    console.log("Finished...")
}

getDebtData();