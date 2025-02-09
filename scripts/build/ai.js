"use strict";
// tf....
// Three layers model
// const model = tf.sequential([
//     Dense({units: 128, inputShape: [8]}),
//     Dense({units: 256, inputShape: [128], activation:"sigmoid"}),
//     Dense({units: 3, inputShape: [256]},
// ]);
// const learningRate = 0.01;
// const optimizer = tf.train.adam(learningRate);
// model.compile({loss: 'meanSquaredError', optimizer: optimizer});
class AI {
    constructor() {
        this.pre_data = [0, 0, 0, 0];
        this.training_data = [[], [], [], []];
        this.turn = 0;
        this.grab_data = true;
        this.data_xs = [];
        this.last_data = [...this.pre_data, ...this.data_xs];
    }
    save_data(paddle, ball, gameState) {
        if (!this.grab_data) {
            return;
        }
        if (this.pre_data == null) {
            const data = [paddle.getLeftX(), ball.getX(), ball.getY(), gameState.getScore()];
            this.pre_data = data;
            return;
        }
        const data_xs = [paddle.getLeftX(), ball.getX(), ball.getY(), gameState.getScore()];
        const index = (paddle.getLeftX() < this.pre_data[0]) ? 0 : ((paddle.getLeftX() == this.pre_data[0]) ? 1 : 2);
        this.last_data = [...this.pre_data, ...data_xs];
        this.training_data[index].push(this.last_data);
        this.pre_data = data_xs;
        // console.log('last_data',this.last_data);
        // console.log('training_data',this.training_data);
        // console.log('previous_data',this.previous_data);
    }
    /* train() {
        console.log('Training');
    
        let len = Math.min(this.training_data[0].length, this.training_data[1].length, this.training_data[2].length);
        if (!len) {
            console.log('no new data');
            return;
        }
        const data_xs = [];
        const data_ys = [];
        for (let i = 0; i < 3; i++) {
            data_xs.push(...this.training_data[i].slice(0, len));
            data_ys.push(...Array(len).fill([i==0?1:0, i==1?1:0, i==2?1:0]));
        }
    
        console.log('training');
        const xs = tf.tensor(data_xs);
        const ys = tf.tensor(data_ys);
    
        (async function() {
            console.log('training2');
            let result = await model.fit(xs, ys);
            console.log(result);
        }());
        console.log('trained');
    } */
    predict(paddle, ball, board) {
        //approximately logistic regression
        //even perform better...
        let wx = 0.33 * ball.getX() - 0.297 * paddle.getX() + board.getRightEdgeX() * 0.00671;
        //map to 0,1 by sigmoid function
        //provide more smoothy reaction
        let y = 1 / (1 + Math.pow(Math.E, (-wx)));
        if (y > 1 / 2) {
            // console.log('prediction', y, w);
            return 'right';
        }
        else if (y < 1 / 2) {
            // console.log('prediction', y, w);
            return 'left';
        }
        return 'hold';
    }
}
