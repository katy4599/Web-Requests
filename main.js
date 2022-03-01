import got from 'got';

async function main() {
    const resp = got(`https://api.github.com/users/katy4599/repos`)
    const data = await resp.json()

    console.log(data);
}

main();