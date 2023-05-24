function maxScore(nums1: number[], nums2: number[], k: number): number {
  const n3 = nums1.map((e, i) => [nums1[i], nums2[i]]);
    n3.sort((a,b)=> b[0] - a[0] || b[1] - a[1]);
    let sum = 0;
    let ans = 0;
    const pq = new MinPriorityQueue({priority : a => a[0]});
    for(let i = 0 ; i < nums1.length ; i++){
        
        sum += n3[i][0];
        pq.enqueue([n3[i][1], i]);
        
        if(pq.size() === k){
            const temp = pq.dequeue().element;
            ans = Math.max(ans, sum * temp[0]);
            sum -= n3[temp[1]][0];
        }
    }
    return ans;
};