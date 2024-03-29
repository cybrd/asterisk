import * as session from 'express-session';
import { Express } from 'express';

export function setSession(myExpress: Express) {
  myExpress.use(
    session({
      secret: '123 abc',
      resave: false,
      saveUninitialized: true
    })
  );
}
