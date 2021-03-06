import { isStr } from '../staticMethods.js'
import dialogTemplate from '../dialogTemplate.js'
import { createDivAndSetAttribute } from '../domMethods.js'

export default function appPushNewElements (attr) {
    if (isStr(attr), attr.search(/^(\.|\#)/) + 1, attr.slice(1).search(/^[\_|(a-zA-Z)]/) + 1) {
        var getElement = createDivAndSetAttribute(attr);

        {
          getElement.innerHTML = dialogTemplate.replace(/(^|\n)\s*/g,'');
          document.body.appendChild(getElement);
        }

        {
          this.dialogElement = attr || null;
          this.cacheDialogElement.push(attr);
        }

        return true
    } else return false
}
