const crypto = require("crypto");
class MessageEncodingDecodingUtil {
  constructor() {}
  static generateSignature(obj) {
    let _string = new MessageEncodingDecodingUtil().serialize(obj);
    let hash = crypto.createHash("sha256");
    return hash.update(_string).digest("hex");
  }
  static verifySignature() {}
  static encrypt(obj) {
    let text = JSON.stringify(obj); //new MessageEncodingDecodingUtil().serialize(obj);
    const algorithm = "aes-256-ctr";
    const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";
    const iv = Buffer.from("912b8cecf96719f97cfd3b814f83fe59", "hex");
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
      iv: iv.toString("hex"),
      content: encrypted.toString("hex"),
    };
  }
  static decrypt(hash) {
    const algorithm = "aes-256-ctr";
    const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";
    const iv = Buffer.from("912b8cecf96719f97cfd3b814f83fe59", "hex");
    const decipher = crypto.createDecipheriv(
      algorithm,
      secretKey,
      iv
    );
    const decrpyted = Buffer.concat([
      decipher.update(Buffer.from(hash,'hex')),
      decipher.final(),
    ]);
    return decrpyted.toString();
  }
  serialize(obj) {
    if (Array.isArray(obj)) {
      return JSON.stringify(obj.map((i) => this.serialize(i)));
    } else if (typeof obj === "string") {
      return `"${obj}"`;
    } else if (typeof obj === "object" && obj !== null) {
      return Object.keys(obj)
        .sort()
        .map((k) => `${k}:${this.serialize(obj[k])}`)
        .join("|");
    }
    return obj;
  }
}
module.exports = {
  MessageEncodingDecodingUtil,
};
