(function () {
    "use strict";

    angular.module("MollyCakes")
        .controller("WorkController", workController);

    function workController() {
        var vm = this;

        vm.cakes = [{
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/12036657_1011409448921627_5941775769333657175_n.jpg?oh=d2b00c78bef6d18581cd959731c37623&oe=56B12345',
            type: 'wedding'
        },{
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/12189796_1016774268385145_116072040997121450_n.jpg?oh=247d309fb523065045349096043da503&oe=56F5BE19',
            type: 'wedding'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xtf1/v/t1.0-9/11249306_1017070568355515_8519447195451526680_n.jpg?oh=e3c336325f84457a0aa8b2a112f95b30&oe=56B31898',
            type: 'wedding'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/12247185_1019777338084838_1393108789687283473_n.jpg?oh=e1033c8defffb700402c1c5cf7dc1fda&oe=56B585E9',
            type: 'wedding'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xal1/v/t1.0-9/1546232_1005692306160008_8552564316961059968_n.jpg?oh=d0443b6ee29dc4c4d41b039c4b0b811e&oe=56EBE34B',
            type: 'sculptured'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/11241032_998473943548511_8899068159160251791_n.jpg?oh=e89a0ef3fa32dea0762d0e261b6bec37&oe=56B107AC'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xlt1/v/t1.0-9/10403422_991539997575239_6402777237877805402_n.jpg?oh=4fa541da3381939e4007fde80f0ec9eb&oe=56EEE693'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/11139967_989460627783176_2661962142689316388_n.jpg?oh=b7de32c2dcc57eb5c4343276bee92ab4&oe=56F5EBA6'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/11889540_975442355851670_5701792759062320403_n.jpg?oh=c96f2b574783a10010c4fcf26d2ce2d6&oe=56F7238A'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/11695831_971157679613471_8667119772539070564_n.jpg?oh=63a3be9756f579105f2af6719a6272a5&oe=56BAC628'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/11147565_943225322406707_4202965400929210615_n.jpg?oh=f07eced7455d92df45aa973eab8018d9&oe=56ADEC4D'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/11258040_925612737501299_3962057940074182357_n.jpg?oh=f7e06796fbee75ef339c1c020aa9c33d&oe=56BC3549'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/11162346_924116287650944_324979564136084087_n.jpg?oh=cda9c2ce8964e4aff754802355a556bf&oe=56BB1EA3'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/11010574_901991943196712_7112804593633745821_n.jpg?oh=eb5969f9fd6c0130c042764eaa845cce&oe=56F3786D'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/11058656_894490623946844_9143353681764592382_n.jpg?oh=201db61a896f8eae731a715c6ba631d1&oe=56B5D4A9'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-prn2/v/t1.0-9/10404170_863889447006962_8252321963405535156_n.jpg?oh=303e0c027c25d5d86ee9d2379dcf67b8&oe=56AF3BAF'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/10153752_839249006137673_1208017874634059623_n.jpg?oh=faf34e31d4ca853975a329359f1b2710&oe=56B0C36D'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xpl1/v/t1.0-9/10730094_836335366429037_6120461166736372118_n.jpg?oh=c69575015cef4557e2c7f0b6dde3ce8a&oe=56EBB6B5'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/1922124_830960426966531_2981695383169254706_n.jpg?oh=a9e1a5e98af92a1b291490c25c563dfa&oe=56AEE8F5'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xft1/v/t1.0-9/10733987_822124904516750_5281351513382135556_n.jpg?oh=3205ca39feccdfe359e723a130758845&oe=56EB2850'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-prn2/v/t1.0-9/1912448_801088059953768_2495957153773716503_n.jpg?oh=7c40bbf0981bfbddd91efe012c58547e&oe=56B2EED0'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/10574527_788099414585966_6019878530996018322_n.jpg?oh=d9d15a210c8b94b2bd6314e4442874d9&oe=56B0BD21'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xpt1/t31.0-8/10560289_780358995360008_2654027162779726355_o.jpg'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/10989160_880145952047978_7771810320535980676_n.jpg?oh=db2eb51e8d246fcadec4e8c31b82aa78&oe=56EC36B4'
        }, {
            url: 'https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/10906135_857549590974281_1908673608405782260_n.jpg?oh=4b77c838c0f979e6ae4f1f12fca2eceb&oe=56F703F5'
        }]
    }
})();