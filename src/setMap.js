/**
 * @set set是不允许重复的数组
 */
{
    let [...sets] = [1, 2, 3, 4, 5, 5, 3];
    let s = new Set(sets);
    s.add(6);
    s.delete(2);
    s.add(2);
    s.has(3);
    console.log(s);
}

{
    let s = new Set([1, 2, 3, 4, 5]);
    // 获取标识
    for(let item of s.keys()) {
        console.log(item);
    }

    // 获取值
    for(let item of s.values()) {
        console.log(item);
    }

    // 获取标签与值
    for(let [key, value] of s.entries()) {~
        console.log(`${key} : ${value}`);
    }

    // 遍历, value在前, key在后
    s.forEach((value, key) => {
        console.log(`${key} : ${value * 2}`);
    });
}
