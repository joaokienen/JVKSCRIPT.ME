import Router from 'next/router';
import $ from "jquery";
import './interconst';

export const returnd = () => {
    Router.push('/');
}

export const contnext = () => {;
    const pathadd = window.location.pathname;
    const path = pathadd.split('/zipo').pop();
    $("#fakeLetsGo, #opacyt").css("opacity", "0");
    setTimeout(() => {Router.push(`${path}/home`)}, 2000);
}
