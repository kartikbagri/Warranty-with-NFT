import React, { useState } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';


const menuClass =
  "text-whites font-semibold tracking-widest text-sm my-6 lg:my-0 lg:mx-6 hover:text-blue transitione";

function Header() {
  const [show, setShow] = useState(true);
  return (
    <div className="grid grid-cols-4 justify-center items-center relative">
      <a href="/" className="lg:col-span-1 col-span-2">
        <img src="logo.png" alt="Logo" className="w-32" />
      </a>
      <div className="col-span-2 flex lg:hidden justify-end">
        <button
          onClick={() => setShow(!show)}
          className={` bt-linear font-semibold text-whites text-md py-3 px-5 rounded`}
        >
          <i className={`${show ? "far fa-bars" : "far fa-times"}`}></i>
        </button>
      </div>

      <div
        className={`${
          show ? "hidden" : "block"
        } bgSmall left-0 px-4 right-0 absolute top-12 lg:px-0 lg:relative lg:top-0 lg:col-span-3 lg:flex gap-10 justify-end items-center`}
      >
        <ul className="lg:flex">
          <li className={menuClass}>
            <a href="/profile">Profile</a>
          </li>
          <li className={menuClass}>
            <a href="/mynfts">My NFTs</a>
          </li>
        </ul>
        <ConnectButton chainStatus="icon" showBalance={false} accountStatus="address" />


        
        {/* <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        return (
          <div
            {...(!mounted && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <button onClick={openConnectModal} type="button">
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button onClick={openAccountModal} type="button">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom> */}
        
      </div>
    </div>
  );
}

export default Header;
