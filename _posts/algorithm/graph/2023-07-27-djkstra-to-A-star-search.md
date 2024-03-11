---
layout: post
title: Graph Algorithms
date:   2023-07-27 19:07:00 +0000
tags: graph
category: Algorithm
usemathjax: true
mermaid: true
---
# Traversal

# Connectness

# Single Source Shortest Path

#### Dijkstra Algorithm

This is a study note from cornell.  
**Dijkstra's Algorithm** 

```
Dijkstra(WeightedGraph g, Vertex s) {
    set d[v] = infinite for all nodes v
    pq = PriorityQueue containing pairs (v, cost), smallest to largest
    d[s] = 0
    add (v, d[v]) to pq for all nodes v
    while pq is not empty {
        remove lowest cost node v from pq
        for each nbr of v {
            if d[nbr] > d[v] + w(v, nbr) {
                d[nbr] = d[v] + w(v, nbr)
                update cost of nbr in pq
                parent[nbr] = v
            }
        }
    }
    // d encodes distances, parent encodes lowest cost paths    
}
```
**Proof of Correctness**  
Let $$ \delta(u,v)$$ be the least cost path form $$u$$ to $$v$$. Let $$d[v]$$ be the cost storerd by Dijkstra.  
**Claim 1** $$d[v] \ge \delta(u,v)$$ (by the definition of $$d[v]$$).  
**Claim 2** when $$v$$ is removed from the priority queue, $$d[v] \le \delta(s,v)$$.  
**Proof by contridiction.** Let $$u$$ be the first node removed from the priority queue such that $$d[u] > \delta(s,u)$$.
![image-shortest_path](/assets/img/shortest_path.jpg)
As shown in the figure above,there is some shortest path $$P$$ from $$s$$ to $$u$$. Let's consider when u is about to be removed in the execution of Dijkstra's algorithm.  
We can always assume node $$y$$ and node $$z$$ always exists (edge case: $$y = s$$, $$z = u$$).  
- Since $$y$$ was removed before $$u$$, $$d[y] \le \delta(s,y)$$ and by **claim 1** $$d[y] = \delta(s,y)$$  
- And as we explored $$y$$, the neighboring node of $$y$$ has been updated, thus $$d[z] \le d[y] + w(y,z)$$   
- As $$u$$ is about to be removed, $$d[u] \le d[z]$$
- Since $$P$$ is the shortest path, $$\delta(s,z) = \delta(s,y) + \delta(y,z)$$ and $$\delta(s,u) = \delta(s,z) + \delta(z,u)$$.  
Then we have, $$d[u] \le d[z] \le d[y] + w(y,z) = \delta(s,z) \le \delta(s,u)$$. This contridicts the supposition, and hence proves **claim2**.  
By **claim 1** and **claim 2**, $$d[u] = \delta(s,u)$$. QED

[Find The Safest Path in a Grid](https://leetcode.cn/problems/find-the-safest-path-in-a-grid/)
You are given a 0-indexed 2D matrix grid of size n x n, where $$ (r, c) $$ represents:  
- A cell containing a thief if grid[r][c] = 1  
- An empty cell if grid[r][c] = 0  
You are initially positioned at cell $$ (0, 0) $$. In one move, you can move to any adjacent cell in the grid, including cells containing thieves.  

The safeness factor of a path on the grid is defined as the minimum manhattan distance from any cell in the path to any thief in the grid.  

Return the maximum safeness factor of all paths leading to cell $$ (n - 1, n - 1) $$.  

An adjacent cell of cell $$ (r, c) $$, is one of the cells $$ (r, c + 1) $$, $$ (r, c - 1) $$, $$ (r + 1, c) $$ and $$ (r - 1, c) $$ if it exists.

The Manhattan distance between two cells $$ (a, b) $$ and $$ (x, y) $$ is equal to $$ \|a - x\| + \|b - y\| $$, where $$ \|val\| $$ denotes the absolute value of val.  

```c++

class Solution {
public:
    int maximumSafenessFactor(vector<vector<int>>& grid) {
        int n=grid.size();
        priority_queue <pair<int,pair<int,int>>, vector<pair<int,pair<int,int>>>, greater<pair<int,pair<int,int>>>> q;
        vector<vector<int>> dis(n,vector<int>(n,INT_MAX));
        
        for (int i=0;i<n;i++) {
            for (int j=0;j<n;j++) {
                if(grid[i][j]){
                    q.push({0,{i,j}});
                    dis[i][j]=0;
                }
            }
        }
        vector<vector<int>> dirs={ {0,1},{0,-1},{1,0},{-1,0} };
        
        while(!q.empty()){
            int i=q.top().second.first,j = q.top().second.second, d=q.top().first;
            q.pop();
            
            for(auto dir:dirs){
                int ni=i+dir[0], nj=j+dir[1];
                
                if(ni>=0 && ni<n && nj>=0 && nj<n && d+1<dis[ni][nj]){
                    q.push({d+1,{ni,nj}});
                    dis[ni][nj]=d+1;
                }
            }
        }
        priority_queue<pair<int,pair<int,int>>> nq;
        nq.push({dis[0][0],{0,0}});
        vector<vector<int>> vis(n,vector<int>(n,0));
        int mx=0;
        while(!nq.empty()){
            int safe= nq.top().first, i=nq.top().second.first, j=nq.top().second.second;
            nq.pop();
            
            if(i==n-1 && j==n-1){
                
                return safe;
            }
            for(auto dir:dirs){
                int ni=i+dir[0], nj=j+dir[1];
                if(ni>=0 && ni<n && nj>=0 && nj<n && !vis[ni][nj]){
                    nq.push({min(safe,dis[ni][nj]),{ni,nj}});
                    vis[ni][nj]=1;
                }
            }
        }
        
        return mx;
    }
};

```
