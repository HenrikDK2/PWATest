import React, { useEffect } from "react";
import Index from "./index";
import Product from "./product";
import { PwaState } from "../Store";
import { useRecoilState } from "recoil";
import { Route } from "react-router-dom";

const Pages = () => {
  const [pwa, setPwa] = useRecoilState(PwaState);

  useEffect(() => {
    const InstallHandler = (e) => {
      console.log("test");
      setPwa({ e });
      e.preventDefault();
    };

    window.addEventListener("beforeinstallprompt", InstallHandler);
    setTimeout(() => {
      Notification.requestPermission(function (status) {
        if (Notification.permission == "granted") {
          navigator.serviceWorker.getRegistration().then(function (reg) {
            const options = {
              body: "Vi har opdateret produkter du har besøgt fornyeligt!",
              icon: "/icons-192.png",
              vibrate: [100, 50, 100],
              data: {
                dateOfArrival: Date.now(),
                primaryKey: 1,
              },
            };
            reg.showNotification("Firma Navn", options);
          });
        }
      });
    }, 4000);

    return () => {
      window.removeEventListener("beforeinstallprompt", InstallHandler);
    };
  }, []);

  return (
    <>
      <main>
        <Route exact path="/" component={Index} />
        <Route exact path="/product" component={Product} />
      </main>
    </>
  );
};

export default Pages;
