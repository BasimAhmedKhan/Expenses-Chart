import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), "data", "data.json");

export function get(){
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
}