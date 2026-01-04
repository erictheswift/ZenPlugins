import { AccountOrCard, AccountType, Movement, Transaction } from '../../types/zenmoney'
import codeToCurrencyLookup from '../../common/codeToCurrencyLookup'
import { ApiCard, ApiAccount, ApiTransaction } from './api'

export interface ConvertResult {
  product: {
    id: number
  }
  account: AccountOrCard
}

/*
  {
        "id": 220287,
        "userId": 2398406,
        "companyId": null,
        "cardRetailId": 1768314,
        "cardProductId": 2402,
        "cardLimitGroupId": 6,
        "name": "Mastercard Standard \"\u041c\u043e\u0446\u043d\u0430\u044f\"",
        "last4": "0125",
        "ibanNum": "BY24UNBS30145120002969050933",
        "cardBin": "514421061",
        "status": 0,
        "nameOnCard": "XXX XX",
        "currencies": 933,
        "rbsContract": "017517505120002969",
        "companyName": null,
        "contractNumber": 512002969,
        "contractKind": 1512,
        "stateSignature": "BETRAY",
        "cardNumber": null,
        "expiryDate": null,
        "currencyLetter": "BYN",
        "type": "RETAIL",
        "token": null,
        "stamp": null,
        "first6": null,
        "tokenizedCardProductGroupId": null,
        "isBelarus": null,
        "balance": 4.02,
        "balanceDate": 1757321925995,
        "active": true,
        "enabled": true,
        "isBlock": false,
        "isCurrent": true,
        "isExpired": false,
        "isDeleted": false,
        "isCorporate": false,
        "isCardOwner": true,
        "isIbanOwner": true,
        "isOneCardOnContract": true,
        "isExpiringWithinMonth": false,
        "isActivationPermitted": true,
        "isCryptoCourse": false,
        "isLimitChangeAvailable": true,
        "isDefaultLimitGroup": true,
        "cardLimitId": 6,
        "mpsId": 1,
        "mpsDesignId": 2,
        "isDigital": false,
        "cardDesignName": "MS",
        "accType": null,
        "cardProductGroupName": null,
        "isBestCard": true,
        "bestCardPoints": null,
        "mps": {
            "id": 1,
            "name": "Mastercard",
            "imageLink": "https://mobile.bsb.by/api/v1/free-zone-management/card-products/get-image/mps-design/2",
            "mpsDesignId": 2
        },
        "designSource": [
            {
                "id": 40,
                "name": "\u0414\u0438\u0437\u0430\u0439\u043d \u043a\u0430\u0440\u0442\u044b Mastercard Standard / MS \u041c\u043e\u0446\u043d\u0430\u044f / \u0414\u0435\u0442\u0441\u043a\u0430\u044f \u0434\u043b\u044f \u041c\u0411 (\u043c\u0438\u043d\u0438\u0430\u0442\u044e\u0440\u043a\u0430)",
                "sourceType": "MOBILE_APP_NEW",
                "imageType": "SMALL",
                "color": null,
                "designType": "MS",
                "imageLink": "https://mobile.bsb.by/api/v1/free-zone-management/card-product-groups/images/download?path=mobile-card-product/design-old/minio_40.png",
                "description": null
            },
            {
                "id": 38,
                "name": "\u0414\u0438\u0437\u0430\u0439\u043d \u043a\u0430\u0440\u0442\u044b Mastercard Standard / MS \u041c\u043e\u0446\u043d\u0430\u044f / \u0414\u0435\u0442\u0441\u043a\u0430\u044f \u0434\u043b\u044f \u041c\u0411 (\u043e\u0431\u043e\u0440\u043e\u0442)",
                "sourceType": "MOBILE_APP_NEW",
                "imageType": "BACK",
                "color": {
                    "id": 1,
                    "description": "\u0411\u0435\u043b\u0430\u044f \u0438\u043a\u043e\u043d\u043a\u0430 \u0438 \u0431\u0435\u043b\u044b\u0439 \u0442\u0435\u043a\u0441\u0442",
                    "icon": "#FFFFFF",
                    "text": "#FFFFFF"
                },
                "designType": "MS",
                "imageLink": "https://mobile.bsb.by/api/v1/free-zone-management/card-product-groups/images/download?path=mobile-card-product/design-old/minio_38.png",
                "description": null
            },
            {
                "id": 162,
                "name": "Mastercard Standard \"\u041c\u043e\u0446\u043d\u0430\u044f\" widget",
                "sourceType": "MOBILE_APP_NEW",
                "imageType": "WIDGET",
                "color": {
                    "id": 2,
                    "description": "\u0411\u0435\u043b\u044b\u0439 \u0442\u0435\u043a\u0441\u0442",
                    "icon": null,
                    "text": "#FFFFFF"
                },
                "designType": "MSP",
                "imageLink": "https://mobile.bsb.by/api/v1/free-zone-management/card-product-groups/images/download?path=mobile-card-product/design/1d1f4009-dd6c-4ab4-a147-b7443b977678_Mastercard Standard.png",
                "description": "Mastercard Standard \"Motsnaya\" widget design"
            },
            {
                "id": 39,
                "name": "\u0414\u0438\u0437\u0430\u0439\u043d \u043a\u0430\u0440\u0442\u044b Mastercard Standard / MS \u041c\u043e\u0446\u043d\u0430\u044f / \u0414\u0435\u0442\u0441\u043a\u0430\u044f \u0434\u043b\u044f \u041c\u0411 (\u0433\u043b\u0430\u0432\u043d\u0430\u044f)",
                "sourceType": "MOBILE_APP_NEW",
                "imageType": "FRONT",
                "color": {
                    "id": 2,
                    "description": "\u0411\u0435\u043b\u044b\u0439 \u0442\u0435\u043a\u0441\u0442",
                    "icon": null,
                    "text": "#FFFFFF"
                },
                "designType": "MS",
                "imageLink": "https://mobile.bsb.by/api/v1/free-zone-management/card-product-groups/images/download?path=mobile-card-product/design-old/minio_39.png",
                "description": null
            }
        ],
        "isKids": false,
        "createdAt": "2024-02-19T14:08:47.585475",
        "updatedAt": "2025-09-08T11:58:45.995496",
        "expiredDateString": null,
        "expiringWithinMonthString": null,
        "isHiddenBalance": false,
        "isRenewal": false
    },
   */
export function convertCards (apiCards: ApiCard[]): ConvertResult[] {
  return apiCards
    .filter(card => card.active && !card.isDeleted && !card.isHiddenBalance)
    .map(card => {
      const instrument = (card.currencyLetter !== '') ? card.currencyLetter : (codeToCurrencyLookup[card.currencies] ?? 'BYN')

      return {
        product: {
          id: card.id
        },
        account: {
          id: String(card.id),
          type: AccountType.ccard,
          title: card.name,
          instrument,
          balance: card.balance,
          syncIds: [
            String(card.id),
            card.ibanNum,
            card.last4
          ]
        }
      }
    })
}

/*
   private final BigDecimal amount;
    private final Calendar closeDate;
    private final Long contractNumber; // cardId?
    private final Currency currency;
    private final String ibanNum;
    private final Long id;
    private final Boolean isAllIncome;
    private final Boolean isArrest;
    private final Boolean isForSmp;
    private final String name;
    private final Calendar openDate;
    private final Long userId;
  */
export function convertAccounts (apiAccounts: ApiAccount[]): ConvertResult[] {
  return apiAccounts
    .filter(account => account.isArrest)
    .map(account => {
      const instrument = (account.currency.letterCode !== '') ? account.currency.letterCode : (codeToCurrencyLookup[account.currency.code] ?? 'BYN')

      return {
        product: {
          id: account.id
        },
        account: {
          id: String(account.id),
          type: AccountType.checking,
          title: account.name,
          instrument,
          balance: account.amount,
          syncIds: [
            String(account.id),
            account.ibanNum
          ]
        }
      }
    })
}

/*
  {
            "id": 113710793,
            "userId": 2398406,
            "cardId": 220287,
            "paymentDate": "05/09/2025 20:34:15",
            "last4namePayer": "0125, XX XX",
            "currCode": "BYN",
            "target": "MAGAZIN SANTA-316",
            "paymentTypeId": null,
            "status": 1,
            "paymentName": null,
            "paymentType": "TRANSACTION",
            "isEnrollment": false,
            "summa": 7.42,
            "balanceBefore": 11.44,
            "balanceAfter": 4.02,
            "currencyTypePayer": "BYN",
            "statusSignature": "\u0423\u0441\u043f\u0435\u0448\u043d\u043e",
            "cardRetailIdRecipient": null,
            "commentText": null,
            "favoriteId": null
        },
  */
export function * convertTransactions (apiTransactions: ApiTransaction[]): Generator<Transaction> {
  for (const transaction of apiTransactions) {
    try {
      if (transaction.summa === 0) {
        // e.g. preauthorization
        continue
      }

      let sum: Movement['sum']
      let invoice: Movement['invoice']

      if (transaction.currCode === transaction.currencyTypePayer) {
        // No currency conversion - use summa directly
        // isEnrollment: false = outcome (expense), sum should be negative
        // isEnrollment: true = income, sum should be positive
        sum = transaction.isEnrollment ? transaction.summa : -transaction.summa
        invoice = null
      } else {
        // Currency conversion - calculate from balance difference
        if (transaction.balanceBefore != null && transaction.balanceAfter != null) {
          sum = Math.round((transaction.balanceAfter - transaction.balanceBefore) * 100) / 100
        } else {
          sum = null
        }
        invoice = {
          sum: transaction.isEnrollment ? transaction.summa : -transaction.summa,
          instrument: transaction.currCode
        }
      }

      yield {
        hold: false,
        date: parseDate(transaction.paymentDate),
        movements: [
          {
            id: String(transaction.id),
            account: { id: String(transaction.cardId) },
            sum,
            fee: 0,
            invoice
          }
        ],
        merchant: {
          fullTitle: transaction.target,
          mcc: null,
          location: null
        },
        comment: transaction.commentText
      }
    } catch (e) {
      console.error(e, transaction)
      throw new Error('Failed to convert transaction')
    }
  }
}

const TIMEZONE = 3

export function parseDate (dateString: string): Date {
  const [datePart, timePart] = dateString.split(' ')
  const [day, month, year] = datePart.split('/').map(Number)
  const [hours, minutes, seconds] = timePart.split(':').map(Number)

  return new Date(Date.UTC(year, month - 1, day, hours - TIMEZONE, minutes, seconds))
}
