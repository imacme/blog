# 2020-06-03

1. process.nextTick() 在事件循环的同一个阶段立即执行
2. vue.nextTick() 在下次 DOM 更新循环结束之后执行延迟回调 （VUE的异步队列）
3. 扫描完整的脚本代码
4. macrotask 和 microtask 是异步任务的两种分类。
5. ![JS事件循环效果图](./images/task.png)
6. JS模拟一个sleep函数，查看微任务的执行顺序。
7. 在node环境下，process.nextTick的优先级高于Promise，也就是可以简单理解为：在宏任务结束后会先执行微任务队列中的nextTickQueue部分，然后才会执行微任务中的Promise部分。


遇到await关键字，await右边的语句会被立即执行然后await下面的代码进入等待状态，等待await得到结果。
当await的后面不是promise对象，那么await会阻塞其后面的代码，先执行async外部的同步代码，同步代码执行完再回到async内部，把这个非promise的东西，作为 await表达式的结果。
当await后面如果是 promise 对象，await 也会暂停async后面的代码，先执行async外面的同步代码，等着 Promise 对象 fulfilled，然后把 resolve 的参数作为 await 表达式的运算结果。

结论：
1、当await后面为非promise时，那么当外部同步代码执行完后，如果外部Promise执行中resolve的调用带参数，那么此时await下面的代码先于外部Promise回调入队的微任务执行。
若外部Promise执行时resolve调用不带参数，那么外部Promise回调入队的微任务先于await后面的代码执行。

结论发生的原因
`Promise.resolve` 方法允许调用时不带参数，直接返回一个`resolved` 状态的 `Promise` 对象。
立即 `resolved` 的 `Promise` 对象，是在本轮“事件循环”（event loop）的结束时，而不是在下一轮“事件循环”的开始时。
对于Promise.resolve: 如果参数是个非 thenable 对象或者不是一个对象，也是返回一个 `resolved` 状态的 Promise。
