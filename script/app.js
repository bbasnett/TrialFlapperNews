(function(){
    angular.module('flappernews',[])
           .factory('posts',[function(){
               var o = {
                   posts: []
               };
               
               return o;
           }])
           .controller('MainCtrl',MainCtrl);
    
    function MainCtrl($scope,posts){
        
//        $scope.posts = [
//            {title: 'post 1',upvotes: 5},
//            {title: 'post 2',upvotes: 15},
//            {title: 'post 3',upvotes: 2},
//            {title: 'post 4',upvotes: 4},
//            {title: 'post 5',upvotes: 6},
//            {title: 'post 6',upvotes: 8}
//        ];
        
        $scope.posts = posts.posts;
        
        $scope.addPost = function(){
            if(!$scope.title || $scope.title === " "){
                return;
            }
            $scope.posts.push({title: $scope.title,
                               link: $scope.link,
                               upvotes: 0});
            $scope.title = '';
            $scope.link = '';
        };
        
        $scope.incrementUpvotes = function(post){
            post.upvotes += 1;
        };
    }
}());


















