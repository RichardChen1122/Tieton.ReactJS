## Vscode Extension
- prettier
- tslint
- perfect-css-modules
- vscode-js-import
- gitlen
- Debugger for Chrome


## Install Dependencies
```
npm install --registry=http://registry.npm.taobao.org
```

## Typescript
`one rule: less any`

## Less and [Css modules](https://github.com/css-modules/css-modules)
Every private less file should be end with `.modules.less`.
```tsx
import * as css from './App.modules.less';

<a className={css.appLink} />
```

## Code Format
use `prettier` `tslint` `stylelint` and `husky`.

## Network Request
use `@ofm/ajax` package to requset network, it exposes an [axios](https://github.com/axios/axios) instance as ajax.
```javascript
import { ajax } from '@ofm/ajax';

ajax.post('url', data).then(() => {})
ajax.get('url').then(() => {})
```

# Router and History
use [react-route](https://github.com/ReactTraining/react-router) and `ofm-history` package as browserHistory which is an instance of [history](https://github.com/ReactTraining/history#readme)

```javascript
import { history, resetHistory } from '@ofm/history';

// set prefix for post url use PUBLIC_URL env
resetHistory({
  basename: process.env.PUBLIC_URL,
});

<Router history={history}>
</Router>

history.push('/path');
```

## [Resa](https://github.com/wangtao0101/resa): Redux and redux-saga based framework


## global config
see: `src/config` and `typings/env.d.ts`

use `process.conf` in any where to touch any config like `process.conf.version`


## i18n
see `src/locale`

init i18n
```javascript
I18n.init({
  type: 'memory',
  locale: 'en',
  defaultNS: 'common',
  translation: require('../locale'),
});
```

change language in login
```javascript
window.location.reload();
```

```javascript
I18n.t('CANCLE') // default namespace

I18n.t('backend', 'SSS') // specific namespace

// 'NAME': 'name: %{name}'
I18n.t('NAME', { name: 'somebody' }) // with parameter
```

`Every i18n resource should be get dynamic where it is used.`

```
const name = I18n.t('NAME');
function add() {
  console.log(name) // wrong
}

function add() {
  const name = I18n.t('NAME');
  console.log(name) // right
}
```
