import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const projectId = "prepwise-7ccff";
const privateKey =
  "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDck86F51ooTud3\naxAjDpLSU8EhnMc/eYK7hEKJWJ2WhlYAuAMy/6TztsEhDYgrqoAHy41YZs44DjQd\n+4PAT5VP34YB3osIgT6wL9eOK3qsoWEFnMLsnEe677AMpcP6VwWP77XRUogJ0VZu\nEGMptP5U+OOn5YZWMe44m597kSn0eRP7Wof4RG5Lhird3CaShNiffBmoSrfa0KwE\nv2i8jtNuJk9crTZfw20gFsUxYWpRVqczmfI/R5zXxH7TZD/sWomY7qwBntfOrdlx\nP8hlh6cEUzxwtNQVvwD3j9deEeeYwSApIwNqt0opbPWI0xukOafMzM9tuHbTroa9\noQUeg3zHAgMBAAECggEAbMd30hGGJNrEy9/A1YkaXx9u32Sx3lvOXSucpJ9PGCyn\nvTMCYOQyNP6rv+EshlxPR4ja6/3HNV3L1f1zvCODPyC8ta9KYadbgwgVBcfrd7ce\nYeYtOwLXXRlXeOVHAO5pj9JnmBNbg3v5Y84xGSBpTP5xRxuqZFe7Y69bt1SfnDAv\nMo7ZurUTgGP3cBynlu8IewhThB0A0OCMWoA9qfbY0xn0OQxtBhCZb2bmTcwZmKim\ni0LYE5vwL+5nEJqsnR/E+s6OXO71LkMr8q4zM54VVG3et2T90w49zD+/Vbqq0iYg\njRVIXA2iD+eQotsjPSVMvQ7yWR7kD+++NivF4si8AQKBgQD6vJlhecO4Xwp2H1XS\nzbGAjNMn7f2GRotcTjnfb/6WzWRzjYcUpMpUf9xKuMmL/RtWB0Bba5rokx6LDIHG\nGD0CKrPaPC+3OiYeb48QAU6KsyWnCGDLA4LsayWFdjotoQFra1ujlgPuxAfJunS5\nOFmv2XEjxvS74i8bWDglfvg2TwKBgQDhNSNlyOeBSVGyDPCYTYSFXQuuNRn0YlPH\n5Q865b9b+pa2JVJwqkNdkYZYmKM3QfbjQ9kOSN7cOL8d3Cl33aYhU7bx3s1F3JMu\nqsxNKUg/ZvNjbuOVDA5SsO8LRawgRClAwWhokJkC9MfDzYPZW5Xg3dkDij1qejZP\nNvJIcUwsCQKBgByHkyg9M6Dp54XTQO+wie7nlysm8D70De1d1UXwN1avXiurwd/+\ndCszNTynU/+CuDaMsqz0THcELmiB7s48ecyiUT6WtJMzoZy68ttOWsJ7aeBcmq7e\n4mnGM0nBTxNcC45Oc+nkKuRjF8PDXH6qw8G3iyEYBUbPkK6a1iCmFtYPAoGBAKZF\nV0cU12dqvHhaeV/ZC5hzI+aQqgL2fai+A0qWyXudPZxpXb501pvEj43l08s+Votg\nUmbrgi7RbrkbDTrEWJ2OcymMN732pmv0CjaF3iOBXPzyp/ApIIIIw9RssjJ4YITA\nxtc8utul4b88grX9mmCVKl4kuEdex64ggSzfCUARAoGBAMKyB0CY2j9y+qLpJknX\nvS68aH/UFJbswuWAJfKWB03cu1vCTgllhDI/lJdxdgEKLo+CpMkdXeixqzm1k7l8\nP+len/pNb0hyvauwBWnga1UqsSz2aMbWl+381HNnTSRmHfDHpvbuJM83vkhnUagv\nStzgfxEvxJ+cBIt4mLmbgJGG\n-----END PRIVATE KEY-----\n";
const clientEmail =
  "firebase-adminsdk-fbsvc@prepwise-7ccff.iam.gserviceaccount.com";

const initFirebaseAdmin = () => {
  const apps = getApps();

  if (!apps.length) {
    initializeApp({
      credential: cert({
        projectId: projectId,
        clientEmail: clientEmail,
        privateKey: privateKey.replace(/\\n/g, "\n"),
      }),
    });
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
};

export const { auth, db } = initFirebaseAdmin();
