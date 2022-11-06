pragma solidity >=0.4.22 <0.9.0;


contract  Shop {
    
    
    mapping(address => uint16) myApple;


    // 사과 구매 함수 
    function buyApple() payable external {
        myApple[msg.sender]++;
    }
    // 보유한 사과의 개수를 반환하는 함수 
    function getMyApples() view external returns(uint16) {
        return myApple[msg.sender];
    }


    // 보유한 모든 사과를 시장에 다시 판매하는 함수:
    function sellMyApple(uint _applePrice) payable external {
        uint refund = (myApple[msg.sender] * _applePrice);
        myApple[msg.sender] =0;
        payable(msg.sender).transfer(refund);
    }
}

