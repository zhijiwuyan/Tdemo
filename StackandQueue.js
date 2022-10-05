
function Queue() {
    //空的item属性
    this.item = [];
    //添加
    Queue.prototype.push = function (element) {
        this.item.push(element);
    }
    //  删除前端
    Queue.prototype.pop = function () {
        // return this.item.shift() 没有return
        this.item.shift()
    }
    // 查看前端
    Queue.prototype.peek = function () {
        return this.item[0]
    }
    // 查看是否为空
    Queue.prototype.isEmpty = function () {
        return this.item.length === 0;
    }
    // 统计个数
    Queue.prototype.size = function () {
        // return this.item.size length即是size 不过item没有size属性 得用length
        return this.item.length
    }
    //toString 转字符串
    Queue.prototype.toString = function () {
        let result = '';
        for (var i = 0; i < this.item.length; i++) {
            result += result + ' ';
        }
        return result
    }

}
function Stack() {
    var item = [];
    //添加
    Stack.prototype.push = function (element) {
        this.item.push(element);
    }
    //删除
    Stack.prototype.pop = function () {
        return this.item.pop();
    }
    // 查看栈顶
    Stack.prototype.peek = function () {
        return this.item[this.item.length - 1];
    }

    // 查看是否为空
    Stack.prototype.isEmpty = function () {
        return this.item.length === 0
    }
    //查看长度
    Stack.prototype.size = function () {
        return this.item.length
    }
    // toString
    Stack.prototype.toString = function () {
        let result = '';
        for (var i = 0; i < this.item.length; i++) {
            result += result + ' ';
        }
        return result
    }
}
var stack = new Stack();
stack.push(10)
console.log(stack);































