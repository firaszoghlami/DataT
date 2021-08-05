
const { google } = require('googleapis')

const client_email = { client_email: 'service@projetalpha-319816.iam.gserviceaccount.com'}
const keyclient_email = Buffer.from(JSON.stringify(client_email)).toString('base64')
const private_key =  { private_key: '\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDDJ76ixc+qQ8f4\nY2BgVYRnRHBvIUOnwmpSbetAsMO+e/eiu0dLHrgw9WNDMyKUilEtYdDSlGXK4nmL\n2dQit1Vr1tbltmU8PDbL01O615BZX6D/9haurKl9jfmUTxujROojncSYctCcbfLW\nkdFgO/JzUDpnBIffWMmXdF6n5FkFhEB5yMP9i1z8iBySP/sgrOsrxQVOIluHKjF5\nB+4KcoGwuGgfnMQlsy5BGFRy42WTMEXXD1mgsvriKRCTQVdUC9XDKLOvsKbeYK05\nxWEq+EPg+yWScy83QPRS8E1Ncaq9zEsxORzw135F+y8ymMh0RuxVYiUaI5vFRSDr\nHGCa+dhJAgMBAAECggEAPaJdyNakgWeqzj3EgGhBysOIpvBgh6kVHzdr5yBskcph\nKVnwaD8pePzm/qA1uaf9f1G3O+p2Q59HN+3x24z/Q3G0qRPz4RQ7UiBJ/2Z5RmC3\nXl+ARmZtmSOvwTFCz0vCjsETB/qq+9yVp0KiV7xXFCgwaby6lMVb1aOBCZFKtDzE\nmQGjGkrRKPJoPCRBs44O9/YpTK4hKQesd8RhMBVX3LJ8dfErrI9st1S8E4rx3pcf\nod3gR/iYgmYGoVj2U1CFxQXA+G92gAVWmfT82GNOZoZZUiCPyhm8DJCZlJYWnp85\npycFrrupOc/PHyKs3QIM+PDFJVThA3N9ok8dVomxCQKBgQD3wyBvBue2ZUyo5B5D\ndgksXWdmj+8Neuze4IY9jkdYogLfav5n3Df0PCwmbQ2VtnFsS4WfDM8svREZa/hv\nIfiXrtKsyCyFtZXaCVs0S3Qvheek0wPg65kMhdSz+aA9F+ppgpgpHlmzcpxXpF1u\nWZ14BAmh00z57wxZ4ui40Bq05wKBgQDJpNgfL86GtUSW/1YP7e0oSHoNOzoJBKKT\nfKrW5Tf/2HtjcmDYWEj4e34I3WcfXyt3QQMvI4y55eJ/KdzJeB51pMeLMZ80Ytnu\nbtSbeoOf327VKxDJuTIh2sEik547siEBlno0VqrpmsjtFu3mwskxGI2yE8gVLg43\niXdp4X4zTwKBgCiE8uL1gCOmQXlFhWWHAk0NIYH2fCP6PI7erVWX1Tc7l7iuKNkX\nfNcmmBnYr+YSJk6Ns1alo6Qvb4J20/Ro290CrFWxjwZ3AgDcktvkkyXKgm3ETNgV\n77vKj1S3uGsFZELJJtVir0zXq5XxvY30ffpIvsKGagpd++kfYOwIrLV1AoGAJBQY\nj0vwee3I/fNlpKf/fOuq2t8z/RUVOaperuCIaoCDY0G9zjfNppgB7vgeUWCn2EiL\nl02XClP1eKc2191kJcx7343bXHYrZBv0cnUzQ9GodP+lm1JFhAUt9U/QSgIPIceY\nyfCP2AhX1wP5QQatFNm90JT1gcShypIQCaPM/sUCgYBrp0k4kBcxLccxhQZzr2xR\ninuL55i4GgiNmjlK0Q2nDwCZLSS/dw/VnH2QlIIAsorQLVEF9qSPvztqaR18QYZO\nx4vLSC3vSrkRQRScmhq+/Nb9wXefdZiAkMoNmOjVCn9J6GRHg7T/Y9sm/PvvKkac\nnHongfM/YY/KC3q/v1G4rg==\n'}
const scopes = 'https://www.googleapis.com/auth/analytics.readonly'
const key = require('./auth.json')
const jwt = new google.auth.JWT(process.env.CLIENT_EMAIL, null, process.env.PRIVATE_KEY, scopes)
/////////////////
'use strict'

const view_id = '247106205'

process.env.GOOGLE_APPLICATION_CREDENTIALS = './auth.json'

jwt.authorize((err, response) => {
  google.analytics('v3').data.ga.get(
    {
      'auth': jwt,
      'ids': 'ga:' + view_id,
      'start-date': '30daysAgo',
      'end-date': 'today',
      'metrics': 'ga:pageviews'
    },
    (err, result) => {
      console.log(err, result)
    }
  )
})