import crypto from 'crypto';
import { constant } from '../constants/constant';
import { IWebhookData } from '../utils/interface'; 

export const verifyChecksum = (data: IWebhookData, checksum, sharedSecret: string) => {

    let str = JSON.stringify(data);
    
    const hmac = crypto.createHmac("sha256", sharedSecret);
    let signature = hmac.update(str).digest().toString("hex");
    
    if (signature===checksum) {
      return constant.VERIFIED;
    } else {
      return constant.NOT_VERIFIED;
    }
}

