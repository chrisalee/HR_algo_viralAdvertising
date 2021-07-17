/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

const viralAdvertising = (n) => {
    // Write your code here
    
    let shared = 5;
    let totalLikes = 0;
    
    for(let day = 1; day <= n; day++){
        console.log('day', day, 'shared', shared);
        let dailyLikes = Math.floor(shared / 2);
        totalLikes += dailyLikes;
        shared = dailyLikes;
        shared *= 3;
    }
    
    console.log('totalLikes',totalLikes);
    return totalLikes;
    
}
