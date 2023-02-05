import React from 'react';
import './trading.view.css';
import Iframe from '../Iframe/Iframe';

//const iframe = '<iframe src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%2FUSD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%2C%7B%22description%22%3A%22NAS100%22%2C%22proName%22%3A%22OANDA%3ANAS100USD%22%7D%2C%7B%22description%22%3A%22US30%22%2C%22proName%22%3A%22OANDA%3AUS30USD%22%7D%5D%2C%22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22compact%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A74%2C%22utm_source%22%3A%22acepropfirmtraders.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22acepropfirmtraders.com%2Findex.html%22%7D" width="100%" height="100"></iframe>'

const TradingView = () => {
  return (
    <div className='trading--view'>
      <div className='trading--view__box'>
        <div className='trading--view__details'>
          <div className='first'>
            {/* <Iframe iframe={iframe} />  */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradingView;