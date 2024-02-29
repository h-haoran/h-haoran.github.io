---
layout: post
title:  A Glimpse of Dynamic Programming
date:   2023-11-27 19:07:00 +0000
tags: dp
categories: Algorithm
usemathjax: true
---
# Overview 
Dynamic programming (dp) is a powerful tool for solving problem. It was intimidating to start with and difficult to grasp for me, so I made this note to share some insight to dp. The essense of dp is meomorization - storing intermediate reults which can be used to construct the solution.  

There are four major steps for dp:
1. Finding the subproblem
2. Initialization
3. Implementaion
4. Optimization(in memory) 

# 1. How to find the subproblem
The biggest question comes to what information do we want to store as intermediate results? Before answering that question, there are two equivalent of asking such question. How can we didivde this problem into subproblems? Is there any recurrence relation lies within the nature of this problem? IMO, one can never think about one question without considering the other two. For simiplicity, we refer to the above questions as finding the subproblem.

All there questions are related to the subproblem. Firsly, the recurrence relation describe the purpose of finding subproblem. We are looking for reccurrance relation that can construct the final solution. Finding such a reccurrence naturaly gives the subproblem. Secondly, the information can be stored, in another word, all possble states of an intermediate steps, helps us to build the subproblem from scratch (is the solution of the subproblem).

Let's look at some examples:  
Fibonacci sequence is defined as: $$ F(n) = F(n−1) + F(n−2), F(0) = 0, F(1) = 1 $$  
Here the reccurrence relation is explicit, so $$ F(n) $$ is the subproblem.  

[Maximum Subarray](https://leetcode.com/problems/maximum-subarray/) 
Given an integer array `nums`, find the subarray with the largest sum, and return its sum.  
Solution:
- subproblem: find the largest sum ending of first k elements (noted as $$f(k)$$) 
- reccurrence: $$ f(k) = max(f(k-1)+nums(k),nums(k)) $$
- stroed states: $$ dp(k) = f(k), k \in [1, n] $$


[Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/description/)
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
`'.'` Matches any single character.​​​​
`'*'` Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).
<details> 
<summary> Example </summary>
Input: s = "ab", p = ".*" <br>
Output: true <br>
Explanation: ".*" means "zero or more (*) of any character (.)". <br>
</details>  
Solution:
- subproblem: Does the subtring $$ s[i] $$ ($$s[0]$$ = "" ) mathch $$p[j]$$ (noted as $$ f(i,j) $$) 
- reccurrence: 
    - base:
    $$ f(0,0) = 1$$ 
    - induction:
    $$ f(i,j) = \left \{ \begin{array}{ll}f(i,j) \lor f(i-1,j-1)  & \text{if } matches(s[i], p[j]) (s[i] == p[j] \text{ or } p[j] == '.') \\f(i,j) \lor f(i-1,j) & \text{if } p[j] == '*' \text{ and } matches(s[i], p[j-1]) \\f(i,j) \lor f(i,j-2) & \text{if } p[j] == '*' \end{array}\right.$$
    note: case 2 recursively defines * mathches one or more preceeding char and case 3 defines * matches 0 preceeding char.
- stroed states: $$ dp(i,j) = f(i,j) $$ 


[Count Stepping Numbers in Range](https://leetcode.com/problems/count-stepping-numbers-in-range/description/) Given two positive integers low and high represented as strings, find the count of stepping numbers in the inclusive range [low, high].  
A `stepping number` is an integer such that all of its adjacent digits have an absolute difference of exactly 1.  
Return an integer denoting the count of stepping numbers in the inclusive range [low, high].  
<details> 
<summary> Example </summary>
Input: low = "90", high = "101"  <br>
Output: 2  <br>
Explanation: The stepping numbers in the range [90,101] are 98 and 101. There are a total of 2 stepping numbers in the range. Hence, the output is 2.
</details>
Let's solve a simplified version first. Count the number of stepping Numbers that are no greater than num. 
Solution:
- subproblem: Let $$f(i,j,k)$$ be the number of strings of length i has ends with digit j, where k \in {0,1,2} representing the previous string is the lowest(all 0s), the highest(==s[0:i)) or in between. ($$f(i,j,k) = 0 \text{ when } j < 0 \lor j > 9$$)
- recurrence: 
    - base: $$ f(i,0,0) = 1 $$, $$ f(0,num[0],1) = 1 $$, everthing else 0.
    - induction: for $$1 \le i < n(len(num))> $$, $$0 \le j \le 9$$: 
    $$ f(i,j,1) = f(i,j-1,1) + f(i,j+1,1) \text{ if } j==num[i]$$
    $$ f(i,j,2) = \left \{ \begin{array}{ll}f(i-1,d-1,2) + f(i-1,d-1,1) + f(i-1,d+1,2) + f(i-1,d+1,1) & \text{if } j < num[i] \\f(i-1,d-1,2) + f(i-1,d+1,2) & \text{if } j > num[i] \end{array}\right.$$
- stroed states: $$ dp(i,j,k) = f(i,j,k) $$ 
- answer: $$ \sum_{d=0}^{9} f(n-1,d,1) + f(n-1,d,2)$$

[Count of Integers](https://leetcode.com/problems/count-of-integers/description/)
You are given two numeric strings num1 and num2 and two integers max_sum and min_sum. We denote an integer x to be `good` if:  
- num1 <= x <= num2  
- min_sum <= digit_sum(x) <= max_sum    
Return the number of good integers.
Note that digit_sum(x) denotes the sum of the digits of x.
<details> 
<summary> Example </summary>
Input: num1 = "1", num2 = "12", min_sum = 1, max_sum = 8 <br>
Output: 11 <br>
Explanation: There are 11 integers whose sum of digits lies between 1 and 8 are 1,2,3,4,5,6,7,8,10,11, and 12. Thus, we return 11. <br>
</details>
Let's solve a simplified version first. Count the number of strings between num1 and num2 that has a digit sum less than or equal to sum.  
Solution:
- subproblem: Let $$f(i,k)$$ be the number of strings of length i has a digit sum less than k. 
- reccurrence: $$f(i, k) = \sum_{d = lo}^{hi} f(i+1,sum-d)$$ (Need to check if it is tight)
  we need a flag to represent either the previous string is the highest, lowest or in between (i.e. num1 = 50, num2 = 60, if we choose 6 as the first digit, it is the highest). hi = highest? num1[i]: 0; and lo = lowest? num2[i]: 9;
- stroed states: $$ dp(i,k,m) = (f(i,k),m) where m \in \{0(lowest), 1(in between), 2(highest)\} $$ 

In summary, There are several types of subproblem:    
1. 1D dp: the only dimentional is the index which represents the size of the problem.
    1.1. the subproblem is the problem itself   
    1.2. the subproblem is a variation of the problem   
2. multi-dimentional:  
    2.1. all dimention are indices, defining the size of the problem. i.e.[Edit Distance](https://leetcode.com/problems/edit-distance/description/), [Longest Common Subsequences](https://leetcode.com/problems/longest-common-subsequence/description/), [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/description/)  
    2.2. some dimention are indices and other indices represents other states of the problem  
        - knapsack [Paiting the Walls](https://leetcode.com/problems/painting-the-walls/description/)  
        - store digits for counting number i.e.[Count Stepping Numbers in Range](https://leetcode.com/problems/count-stepping-numbers-in-range/description/), [Count of Integers](https://leetcode.com/problems/count-of-integers/description/)


# 2. Initialization
Initialization is constructing the base case in the reccurrence. 
# 3. Implementaion
Top-down vs Bottom-up   
![bot-up](/assets/img/botup.JPG)  

![top-down](/assets/img/topdown.JPG)  
As illustrated in the graph above, the bot-up approach fill in the dp table from the base condition in order. While the top-down approach starts from the problem itself and recursively solves the subproblems that can be used to induce the final outcome. Therefore, the top-dup approach does not necessarily have to fill out all the dp table and hence can be more time efficient, however, it will have to store the running stack as a nature of the recursion.
# 4. Optimization
Instead of storing the whole dp table, it can be optimized by only using the last(or last two) row(s).
# Give it a try
[Paiting the walls](https://leetcode.com/problems/painting-the-walls/description/)
You are given two 0-indexed integer arrays, `cost` and `time`, of size n representing the costs and the time taken to paint n different walls respectively. There are two painters available:
- A paid painter that paints the ith wall in `time[i]` units of time and takes `cost[i]` units of money.
- A free painter that paints any wall in 1 unit of time at a cost of 0. But the free painter can only be used if the paid painter is already occupied.
Return the minimum amount of money required to paint the n walls.

Example 1:  
Input: `cost` = [1,2,3,2], `time` = [1,2,3,2]  
Output: 3  
Explanation: The walls at index 0 and 1 will be painted by the paid painter, and it will take 3 units of time; meanwhile, the free painter will paint the walls at index 2 and 3, free of cost in 2 units of time. Thus, the total cost is 1 + 2 = 3.

Initial thoughts: This is a variation of knapsack problem, you want to optimize in both cost and time. The goal is to minimize the cost so we want to choose the wall with lower cost. In the meantime, each wall we choose (to be painted by a paid painter) gives time for the free painter to paint 
`time[i]` walls with 0 cost. Since there is no corelation btween `cost` and `time` for the walls, there is no greedy algorithm for that. 

The first thought is to use brute force algorithm to check all $$ 2^n $$ possible choices. A dfs can be used to explore two choices of wheather be painted by paid or free painter for each wall. We can prune the search tree by recording the number of walls we have painted( = # of walls we chose + # of time units paid painter spent). Once it reached the total number of walls, we can end the current exploration.

Brute force solution:
```c++ 
    class Solution {
    public:
        void dfs(vector<int>& costs, vector<int>& time, int i, int cost, int wl2p, int &ans) {
            if (wl2p <= 0) {
                ans = min(ans, cost);
                return;
            }
            if (i == costs.size()) return;
            dfs(costs, time, i+1, cost+costs[i],wl2p-1-time[i],ans);
            dfs(costs, time, i+1, cost, wl2p, ans);
        }
        int paintWalls(vector<int>& cost, vector<int>& time) {
            int ans = INT_MAX;
            dfs(cost, time, 0, 0, cost.size(), ans);
            return ans;
        }
    };
```

Solution:
- subproblem: Let $$f(i,j)$$ = The min cost after "painting" (assigning the wall to paid or free worker) first i walls with j walls painted
- recurrence: $$ f(i,j) = min(f(i-1, j-1), f(i-1,j-1-time[i]) + cost[i]) $$
- answer: $$f(n,n)$$;


Bot-up solution
```c++
class Solution {
public:
    int paintWalls(vector<int>& cost, vector<int>& time) {
        int ans = INT_MAX;
        int n = cost.size();
        vector<vector<int>> dp(n,vector<int>(n+1,INT_MAX/2));
        
        dp[0][0] = 0;
        for (int i = 1; i <= min(n, time[0]+1); i++) {
            dp[0][i] = cost[0];
        }
        for (int i = 1; i < n; i++) {
            for (int j = 0; j <= n; j++) {
                // choose
                dp[i][j] = min(dp[i][j], dp[i-1][max(0, j - time[i] - 1)] + cost[i]);
                // not choose
                dp[i][j] = min(dp[i][j], dp[i-1][j]);
            } 
        }
        return dp[n-1][n];
    }
};
```

Top-down solution
```c++
class Solution {
public:
    int helper(vector<int>& cost, vector<int>& time, vector<vector<int>>& dp, int idx, int w) {
        if (dp[idx][w] == -1) {
            int k = max(0, w-1-time[idx-1]);
            dp[idx][w] = min(helper(cost,time,dp,idx-1,w), helper(cost,time,dp,idx-1,k)+cost[idx-1]);
        }
        return dp[idx][w];
    }
    int paintWalls(vector<int>& cost, vector<int>& time) {
        int n = cost.size();
        vector<vector<int>> dp(n+1, vector<int>(n+1,-1));
        for(int i = 0; i <= n; i++) {
            dp[i][0] = 0;
        }
        for (int i = 1; i <=n;  i++) {
            dp[0][i] = INT_MAX/2;
        }
        return helper(cost,time,dp,n,n);
    }
};
```