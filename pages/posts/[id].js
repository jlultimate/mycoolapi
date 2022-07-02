import { google } from "googleapis";

export async function getServerSideProps({query}){
    var auth = await google.auth.getClient({ scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]});
    var sheets = google.sheets({version: "v4", auth});

    var {id} = query;
    var range = `Sheet1!A${id}:G${id}`;
    var response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
    });
    var [title, content] = response.data.values[0];
    var all = response.data.values[0];
    
    return {
        props: {
            title,
            content,
            all
        }
    }
};
export default function Post({title, content, all}){
    return <article>
        <h1>Data fetched: </h1>
        <p>{all.map(x => "" + x + ", ")}</p>
    </article>;
};