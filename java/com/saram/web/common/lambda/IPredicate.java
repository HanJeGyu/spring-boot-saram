package com.saram.web.common.lambda;

/**
 * IPredicate
 */
@FunctionalInterface
public interface IPredicate {

    public abstract boolean test(Object o);
}