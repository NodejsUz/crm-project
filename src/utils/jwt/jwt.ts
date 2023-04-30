import jwt, { Secret } from 'jsonwebtoken';

class JwtGenerate {
  public generateJwt(payload: any) {
    try {
      const secret: Secret = process.env.JWT_SECRET || '';

      return jwt.sign({_id: payload}, secret, {expiresIn: 60*60*60});
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public refresh_token(payload: any) {
    try {
      const secret: Secret = process.env.REFRESH_TOKEN || '';

      return jwt.sign({_id: payload}, secret, {expiresIn: 60*60*60});
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export default JwtGenerate;
