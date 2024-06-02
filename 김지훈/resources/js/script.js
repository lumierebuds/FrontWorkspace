var mockProductList = [
    {
        pno: 1,
        name: "Do it ! 자바프로그래밍 입문",
        description: "자바 프로그래밍을 입문하는데 있어서 최적의 책!",
        price: 15500,
        src: "resources/images/java.jpg"
    },
    {
        pno: 2,
        name: "Do it ! 오라클로 배우는 데이터베이스 입문",
        description: "오라클을 입문하는데 있어서 최적의 책!",
        price: 20000,
        src: "resources/images/oracle.jpg"
    },
    {
        pno: 3,
        name: "Do it! 리액트 네이티브 앱 프로그래밍",
        description: "리액트 네이티브를 입문하는데 있어서 최적의 책!",
        price: 44200,
        src: "resources/images/react.jpg"
    },
    {
        pno: 4,
        name: "Do it ! HTML+CSS+자바스크립트 웹 표준의 정석",
        description: "HTML+CSS+자바스크립트 프로그래밍을 입문하는데 있어서 최적의 책!",
        price: 30000,
        src: "resources/images/html.jpg"
    },
    {
        pno: 5,
        name: "JSP 웹 프로그래밍과 스프링 프레임워크",
        description: "JSP를 입문하는데 있어서 최적의 책!",
        price: 27000,
        src: "resources/images/jsp.jpg"
    },
    {
        pno: 6,
        name: "리액트 200제",
        description: "리액트를 입문하는데 있어서 최적의 책!",
        price: 22500,
        src: "resources/images/react200.PNG"
    },
    {
        pno: 7,
        name: "Do it! 자바스크립트 입문",
        description: "자바스크립트를 입문하는데 있어서 최적의 책!",
        price: 16200,
        src: "resources/images/js.png"
    },
    {
        pno: 8,
        name: "Do it ! Node.js 프로그래밍 입문",
        description: "Node.js을 입문하는데 있어서 최적의 책!",
        price: 32400,
        src: "resources/images/node.png"
    },
]

/* 장바구니를 담은후값 */
var totalPrice = 0;

/* 리액트 방식 */
/* jQuery를 섞어서 사용했다. */
function render() {
    var $section = $(".section-card");

    for (var product of mockProductList) {
        var $card = $(`<div class='card' data-pno="${product.pno}" data-title="${product.name}" data-price="${product.price}"></div>`);
        var $content = $(`<div class='card-content'></div>`);

        $content.append($(`<div class="image"><img src="../${product.src}" alt="" height="100%"></div>`));

        $content.append($(`<div class="title"><span>${product.name}</span></div>`));
        $content.append($(`<div class="price"><span>${product.price}원</span></div>`));
        $content.append($(`<div class="basket"><input type="button" value="장바구니 담기" onclick="stock(this); total(this)"></div>`))


        // .card태그 안에 .card-content 태그를 넣기(내용추가) 
        $card.append($content);

        // 상품목록이 있는 .section 태그안에 .card 태그 넣기 
        $section.append($card);
    }
};

// 페이지가 처음 로드될때 render 함수가 호출되어서 "추가된다."
window.onload = function () {
    (function () {
        render()
    })();
}


// ---------------- 검색기능과 관련된 코드 시작----------------

function search() {

    console.log("검색중..");
    // 문자열 검색시 대소문자를 가리지 않기 위한 toLowerCase()
    var keyword = $("#product-name").val().toLowerCase();
    var $cards = $(".card");
    console.log(keyword);

    $cards.each(function (index, card) {
        // 제목이랑 검색어가 일치하는지 학인하기 위한 변수 
        var title = $(card).children(".card-content").children(".title").text().toLowerCase();
        if (title.includes(keyword)) {
            $(card).css("display", "block");
        }
        else if (!title.includes(keyword)) {
            $(card).css("display", "none");
        }
        else {
            $(card).css("display", "block");
        }
    })
}


// ---------------- 검색기능과 관련된 코드 끝----------------


// ---------------- 모달기능과 관련된 코드 시작----------------


// ---------------- 모달기능과 관련된 코드 끝----------------


// ---------------- 장바구니추가 관련된 코드 시작--------------

function stock(item) {
    console.log("장바구니 담기");
    console.log(item);

    var $shopping = $(".shopping-title");
    // "장바구니" 아래에 형재요소로 추가하기 
    var $item = $(item);
    var $card = $item.parents(".card");

    // 추가되는 상품의 정보를 문자열로 만들어 이를 div.span에 요소로 넣어 추가한다. 
    var product = `${$card.data("title")} - ${$card.data("price")}원`
    var $title = $(`<div class="shopping-book"><span>${product}</span></div>`);

    $shopping.after($title);

}



// ---------------- 장바구니추가 관련된 코드 끝----------------




// ---------------- 장바구니상품 가격계산 관련된 코드 시작--------------
function total(item) {

    console.log("장바구니 상품 가격계산중..");
    console.log(item);
    // 숫자값인 가격을 찾기위한 정규식 작성(숫자가 아닌건 삭제)

    var $item = $(item);
    var $card = $item.parents(".card");
    var price = $card.data("price");
    totalPrice += price;

    // 장바구니 값 바꾸기(.shopping-price > h3) 
    console.log(totalPrice);
    var $finalPrice = $(".shopping-price > h3");
    $finalPrice.text(`Total : ${totalPrice}원`);


}



// ---------------- 장바구니상품 가격계산 관련된 코드 끝----------------