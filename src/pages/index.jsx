import React from "react";
import Avatar from "../components/Avatar";

import HeadlineWithFocus from "../components/HeadlineWithFocus";

const Index = props => {
  return (
    <div className="c-content-box">
      <Avatar modifierClasses="c-avatar--as-logo" />
      <h2>Hello World, My name is Kien</h2>
      <HeadlineWithFocus
        modifierClassNames={`
          c-headline-focus 
          c-headline-focus--super-big 
        `}
      >
        I'm a front-end web developer
      </HeadlineWithFocus>
      <p>
        lIce cream jelly-o bear claw. Ice cream cake chocolate cake icing
        tiramisu cake bear claw topping sugar plum. Chocolate cake chocolate
        cake jelly beans brownie jelly beans cookie caramels. Apple pie
        gingerbread caramels tootsie roll chocolate oat cake. Bear claw
        chocolate cake jelly. Soufflé cake dessert. Chocolate bar cotton candy
        oat cake candy canes. Dragée gummi bears brownie sweet gingerbread
        muffin apple pie. Biscuit muffin soufflé chupa chups toffee. Pudding pie
        cupcake marshmallow. Powder gummi bears macaroon cheesecake. Candy canes
        liquorice sesame snaps pastry marshmallow jelly beans bear claw.
        Cheesecake cheesecake cake fruitcake macaroon.
      </p>
    </div>
  );
};

export default Index;
