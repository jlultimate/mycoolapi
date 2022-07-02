import { google } from "googleapis";
import { normalizeRepeatedSlashes } from "next/dist/shared/lib/utils";

export async function getServerSideProps({query}){
    var auth = await google.auth.getClient({ scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]});
    var sheets = google.sheets({version: "v4", auth});

    var {id} = query;
    var range = `Sheet1!A${id}:D${id}`;
    console.log(range);
    var response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
    });
    var [title, content] = response.data.values[0];
    var all = response.data.values[0];
    console.log(response.data.values[0]);
    return {
        props: {
            title,
            content,
            all
        },
    }
};
function doprint(all){
    return (
        <div>
            {all.map(w => <p>{w}</p>)}
        </div>
    );
    
}
export default function Post({title, content, all}){
    return <article>
        {/* <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: content}}></div> */}
        <p>
            {doprint(all)}
        </p>
    </article>;
};