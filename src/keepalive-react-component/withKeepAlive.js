
import {useRef,useContext, useEffect} from 'react';
import CacheContext from './CacheContext';
import * as cacheTypes from './cache-types';
import uuid from 'uuid';//v3执行会返回一个永远独一无二的值
console.log(uuid);
function withKeepAlive(OldComponent,{cacheId=uuid.v4(),scroll}){
    return function(props){
        let {cacheStates,dispatch,mount,handleScroll} = useContext(CacheContext);
        let divRef = useRef(null);
        useEffect(()=>{
            let onScroll = handleScroll.bind(null,cacheId);
            if(scroll){
                divRef.current.addEventListener('scroll',onScroll,true);//监听捕获阶段
            }
            return divRef.current.removeEventListener('scroll',onScroll);
        },[handleScroll]);
        useEffect(()=>{
            let cacheState = cacheStates[cacheId];
            //如果孩子(真实DOM)已经 OK了
            if(cacheState&&cacheState.doms&&cacheState.status !==cacheTypes.DESTROY){
                let doms = cacheState.doms;//出去被代孕的孩子们，
                //divRef.current.parentNode.appendChild(dom);
                doms.forEach(dom=>divRef.current.appendChild(dom));//抱回来作为自己的儿子
                if(scroll){
                    doms.forEach(dom=>{
                        if(cacheState.scrolls[dom]){
                            dom.scrollTop = cacheState.scrolls[dom];
                        }
                    });
                }
            }else{//如果孩子还没有，去派生吧
                mount({cacheId,reactElement:<OldComponent {...props} dispatch={dispatch}/>});
            }
        },[cacheStates, dispatch, mount, props]);
        return (
            <div id={`withKeepAlive-$cacheId{}`} ref={divRef}>
                {/*此处需要一个OldComponent渲染出来的真实DOM*/}
            </div>
        )
    }
}
export default withKeepAlive;
/**
 * 本组件核心思路是
 * 我们要通过缓存容器去创建OldComponent对应的真实DOM，并且进行缓存
 * 即使这个OldComponent被销毁了，缓存还可以保留
 * 以后这个OldComponent再次渲染的时候，可以复用上次的缓存就可以了
 */