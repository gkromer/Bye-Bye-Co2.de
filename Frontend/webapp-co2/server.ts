// generated by @ng-toolkit/serverless
import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import * as express from 'express';
import * as cors from 'cors';
import * as compression from 'compression';

import {join} from 'path';

export const app = express();

app.use(compression());
app.use(cors());

const DIST_FOLDER = join(process.cwd(), 'dist/webapp-co2');

app.get('*.*', express.static(join(DIST_FOLDER), {
    maxAge: '1y'
}));

app.get('/*', (req, res) => {
    res.sendFile(join(DIST_FOLDER + '/index.html'));
});