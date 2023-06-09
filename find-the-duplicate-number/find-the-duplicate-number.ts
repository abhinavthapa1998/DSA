// Hard Memorisable Solution Time O(N)
function findDuplicate(nums: number[]): number {
    let slow:number = 0;
    let fast:number = 0;

    while(true){
        // Traverse until both are same
        slow = nums[slow];
        fast = nums[nums[fast]];
        if(slow == fast) break;
    }

    let slow2 = 0;

    while(true){
        slow = nums[slow];
        slow2 = nums[slow2];
        if (slow == slow2) return slow;
    }
};