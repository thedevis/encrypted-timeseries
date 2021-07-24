const crypto = require('crypto');
class MessageEncodingDecodingUtil{
    constructor(){}
    static generateSignature(obj){
        let _string  = MessageEncodingDecodingUtil.serialize(obj);
        let hash = crypto.createHash('sha256');
        return hash.update(_string).digest('hex');
    }
    static verifySignature(){

    }
    static encrypt(){
        const algorithm = 'aes-256-ctr';
        const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
        const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
        return {
            iv: iv.toString('hex'),
            content: encrypted.toString('hex')
        };
    }
    static decrypt(){
        const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));
        const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
        return decrpyted.toString();
        
    }
    static serialize(obj){
        if (Array.isArray(obj)) {
            return JSON.stringify(obj.map(i => serialize(i)))
          } else if(typeof obj === 'string') {
            return `"${obj}"`
          } else if (typeof obj === 'object' && obj !== null) {
            return Object.keys(obj)
              .sort()
              .map(k => `${k}:${serialize(obj[k])}`)
              .join('|')
          }
          return obj
    }
    

}
module.exports = {
    MessageEncodingDecodingUtil
}


