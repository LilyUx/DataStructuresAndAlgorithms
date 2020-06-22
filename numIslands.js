/**
 * 
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。
 * 此外，你可以假设该网格的四条边均被水包围。
 * 
 * 示例 1:
 * 输入
 *  1111
 *  1101
 *  1100
 *  0000
 * 输出: 
 *  示例 2:
 * 输入
 *  1100
 *  1100
 *  0010
 *  0001
 * 输出: 3
 * 解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/number-of-islands
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 */
/**
 * BFS
 * @param {*} grid 
 */
// const numIslands = (grid) => {
//     let count = 0;
//     let quene = [];
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[0].length; j++) {
//             if(grid[i][j] === '1') {
//                 count++;
//                 grid[i][j] = '0';
//                 quene.push([i, j]);
//                 turnZero(quene, grid)
//             }
//         }
        
//     }
//     return count;
// }

// function turnZero(quene, grid) {
//     console.log('--')
//     const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
//     while(quene.length) {
//         const cur = quene.shift();
//         for (const dir of dirs) {
//             const x = cur[0] + dir[0]
//             const y = cur[1] + dir[1]
//             if(x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] !== '1') {
//                 continue;
//             }
//             grid[x][y] = '0';
//             quene.push([x, y])
//         }
//     }
// }

var numIslands = function(grid) {
    let count = 0;
    let quene = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                count++;
                grid[i][j] = '0';
                quene.push([i, j]);
                bfs(quene, grid)
            }
        }
        
    }
    return count;
 };

 function bfs(quene, grid) {
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
     while(quene.length) {
        const cur = quene.shift();
        for(const dir of dirs) {
            const x = cur[0] + dir[0];
            const y = cur[1] + dir[1];
            if(x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] !== '1') {
                continue;
            }
            grid[x][y] = '0';
            quene.push([x, y]);
        }    
    }
}


const arr = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]
console.log(numIslands(arr))