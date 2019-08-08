import { initialize, use } from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import { Express, Request } from 'express';

export function setPassport(myExpress: Express) {
  myExpress.use(initialize());

  use(
    'jwt',
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'test',
        passReqToCallback: true
      },
      (req: Request, jwtPayload: any, done: Function) => {
        req.user = jwtPayload;
        req.user.test = 'test';
        done(null, jwtPayload);
      }
    )
  );
}
