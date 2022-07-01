import { google } from "googleapis";

export async function getServerSideProps({query}){
    var auth = await google.auth.getClient({ scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]});
    var sheets = google.sheets({version: "v4", auth});

    var {id} = query;
    var range = `Sheet1!A${id}:C${id}`;
    var response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
    });
    var [title, content] = response.data.values[0];
    return {
        props: {
            title,
            content
        }
    }
};
export default function Post({title, content}){
    return <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: content}}></div>
    </article>;
};