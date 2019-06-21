package com.saram.web.common.lambda;

/**
 * IConsumer
 * 기능을 하나만 정의
 */
@FunctionalInterface    // 함수형 인터페이스
public interface IConsumer {

    public abstract void accept(Object o);
        
}