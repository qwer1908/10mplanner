const quotes = [
    {
        quote: "주문을 외듯 긍정적인 말을 읊조리기만 해도 사고가 상당히 변화된다."
    },
    {
        quote: "'기분이 좋아질 만한 생각'을 적극적으로 늘려 나가자."
    },
    {
        quote: "마음은 의식적으로 만들어 나가는 것이다"
    },
    {
        quote: "어떤 마음을 소중히 하고 어떤 마음을 줄여나갈지 정하자"
    },
    {
        quote: "결과를 항상 내려놓아야 한다. 지금 할 수 있는 일에 집중하고 나머지는 법칙에 맡긴다. 결과를 내놓을 가능성을 가진 '좋은 원인 만들기'에 즐겁게 전념한다."
    },
    {
        quote: "스스로를 어떤식으로든 판단하지 않는다."
    },
    {
        quote: "앞일을 내다보지 않는 집중력이 필요하다. 절대로 먼저 망상하지 말고 지금해야 할 일을 마음을 다해 행한다."
    },
    {
        quote: "필 꽃은 스스로 피어난다. 마음을 다해 지금을 살자."
    },
    {
        quote: ""
    }
]

const quote = document.querySelector(".quotes");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]
quote.innerText=todaysQuote.quote;