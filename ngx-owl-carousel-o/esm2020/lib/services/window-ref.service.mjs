// import { Injectable } from '@angular/core';
// function _window(): any {
//    // return the global native browser window object
//    return window;
// }
// @Injectable()
// export class WindowRefService {
//    get nativeWindow(): any {
//       return _window();
//    }
// }
import { isPlatformBrowser } from '@angular/common';
import { InjectionToken, PLATFORM_ID, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Create a new injection token for injecting the window into a component.
 */
export const WINDOW = new InjectionToken('WindowToken');
/**
 * Define abstract class for obtaining reference to the global window object.
 */
export class WindowRef {
    get nativeWindow() {
        throw new Error('Not implemented.');
    }
}
/**
 * Define class that implements the abstract class and returns the native window object.
 */
export class BrowserWindowRef extends WindowRef {
    constructor() {
        super();
    }
    /**
     * @returns window object
     */
    get nativeWindow() {
        return window;
    }
}
BrowserWindowRef.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: BrowserWindowRef, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
BrowserWindowRef.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: BrowserWindowRef });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: BrowserWindowRef, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
/**
 * Create an factory function that returns the native window object.
 * @param browserWindowRef Native window object
 * @param platformId id of platform
 * @returns type of platform of empty object
 */
export function windowFactory(browserWindowRef, platformId) {
    if (isPlatformBrowser(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    const obj = {
        setTimeout: (func, time) => { },
        clearTimeout: (a) => { }
    };
    return obj;
}
/**
 * Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class.
 */
export const browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
/**
 * Create an injectable provider that uses the windowFactory function for returning the native window object.
 */
export const windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, PLATFORM_ID]
};
/**
 * Create an array of providers.
 */
export const WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LXJlZi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbGlicy9uZ3gtb3dsLWNhcm91c2VsLW8vc3JjL2xpYi9zZXJ2aWNlcy93aW5kb3ctcmVmLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDO0FBQzlDLDRCQUE0QjtBQUM1Qix1REFBdUQ7QUFDdkQsb0JBQW9CO0FBQ3BCLElBQUk7QUFDSixnQkFBZ0I7QUFDaEIsa0NBQWtDO0FBQ2xDLCtCQUErQjtBQUMvQiwwQkFBMEI7QUFDMUIsT0FBTztBQUNQLElBQUk7QUFFSixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWtDLGNBQWMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV4Rzs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUV4RDs7R0FFRztBQUNILE1BQU0sT0FBZ0IsU0FBUztJQUM3QixJQUFJLFlBQVk7UUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGO0FBRUQ7O0dBRUc7QUFFSCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsU0FBUztJQUM3QztRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxZQUFZO1FBQ2QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7NkdBVlUsZ0JBQWdCO2lIQUFoQixnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFENUIsVUFBVTs7QUFjWDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxhQUFhLENBQzNCLGdCQUFrQyxFQUNsQyxVQUFrQjtJQUVsQixJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQ2pDLE9BQU8sZ0JBQWdCLENBQUMsWUFBWSxDQUFDO0tBQ3RDO0lBQ0QsTUFBTSxHQUFHLEdBQUc7UUFDVixVQUFVLEVBQUUsQ0FBQyxJQUFTLEVBQUUsSUFBUyxFQUFFLEVBQUUsR0FBRSxDQUFDO1FBQ3hDLFlBQVksRUFBRSxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUUsQ0FBQztLQUM3QixDQUFBO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBa0I7SUFDbEQsT0FBTyxFQUFFLFNBQVM7SUFDbEIsUUFBUSxFQUFFLGdCQUFnQjtDQUMzQixDQUFDO0FBRUY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQW9CO0lBQzdDLE9BQU8sRUFBRSxNQUFNO0lBQ2YsVUFBVSxFQUFFLGFBQWE7SUFDekIsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQztDQUMvQixDQUFDO0FBRUY7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLHFCQUFxQixFQUFFLGNBQWMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gZnVuY3Rpb24gX3dpbmRvdygpOiBhbnkge1xuLy8gICAgLy8gcmV0dXJuIHRoZSBnbG9iYWwgbmF0aXZlIGJyb3dzZXIgd2luZG93IG9iamVjdFxuLy8gICAgcmV0dXJuIHdpbmRvdztcbi8vIH1cbi8vIEBJbmplY3RhYmxlKClcbi8vIGV4cG9ydCBjbGFzcyBXaW5kb3dSZWZTZXJ2aWNlIHtcbi8vICAgIGdldCBuYXRpdmVXaW5kb3coKTogYW55IHtcbi8vICAgICAgIHJldHVybiBfd2luZG93KCk7XG4vLyAgICB9XG4vLyB9XG5cbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENsYXNzUHJvdmlkZXIsIEZhY3RvcnlQcm92aWRlciwgSW5qZWN0aW9uVG9rZW4sIFBMQVRGT1JNX0lELCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluamVjdGlvbiB0b2tlbiBmb3IgaW5qZWN0aW5nIHRoZSB3aW5kb3cgaW50byBhIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGNvbnN0IFdJTkRPVyA9IG5ldyBJbmplY3Rpb25Ub2tlbignV2luZG93VG9rZW4nKTtcblxuLyoqXG4gKiBEZWZpbmUgYWJzdHJhY3QgY2xhc3MgZm9yIG9idGFpbmluZyByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCB3aW5kb3cgb2JqZWN0LlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2luZG93UmVmIHtcbiAgZ2V0IG5hdGl2ZVdpbmRvdygpOiBXaW5kb3cgfCBPYmplY3Qge1xuICAgIHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkLicpO1xuICB9XG59XG5cbi8qKlxuICogRGVmaW5lIGNsYXNzIHRoYXQgaW1wbGVtZW50cyB0aGUgYWJzdHJhY3QgY2xhc3MgYW5kIHJldHVybnMgdGhlIG5hdGl2ZSB3aW5kb3cgb2JqZWN0LlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJvd3NlcldpbmRvd1JlZiBleHRlbmRzIFdpbmRvd1JlZiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgd2luZG93IG9iamVjdFxuICAgKi9cbiAgZ2V0IG5hdGl2ZVdpbmRvdygpOiBXaW5kb3cgfCBPYmplY3Qge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZmFjdG9yeSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5hdGl2ZSB3aW5kb3cgb2JqZWN0LlxuICogQHBhcmFtIGJyb3dzZXJXaW5kb3dSZWYgTmF0aXZlIHdpbmRvdyBvYmplY3RcbiAqIEBwYXJhbSBwbGF0Zm9ybUlkIGlkIG9mIHBsYXRmb3JtXG4gKiBAcmV0dXJucyB0eXBlIG9mIHBsYXRmb3JtIG9mIGVtcHR5IG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gd2luZG93RmFjdG9yeShcbiAgYnJvd3NlcldpbmRvd1JlZjogQnJvd3NlcldpbmRvd1JlZixcbiAgcGxhdGZvcm1JZDogT2JqZWN0XG4pOiBXaW5kb3cgfCBPYmplY3Qge1xuICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCkpIHtcbiAgICByZXR1cm4gYnJvd3NlcldpbmRvd1JlZi5uYXRpdmVXaW5kb3c7XG4gIH1cbiAgY29uc3Qgb2JqID0ge1xuICAgIHNldFRpbWVvdXQ6IChmdW5jOiBhbnksIHRpbWU6IGFueSkgPT4ge30sXG4gICAgY2xlYXJUaW1lb3V0OiAoYTogYW55KSA9PiB7fVxuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgaW5qZWN0YWJsZSBwcm92aWRlciBmb3IgdGhlIFdpbmRvd1JlZiB0b2tlbiB0aGF0IHVzZXMgdGhlIEJyb3dzZXJXaW5kb3dSZWYgY2xhc3MuXG4gKi9cbmV4cG9ydCBjb25zdCBicm93c2VyV2luZG93UHJvdmlkZXI6IENsYXNzUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IFdpbmRvd1JlZixcbiAgdXNlQ2xhc3M6IEJyb3dzZXJXaW5kb3dSZWZcbn07XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluamVjdGFibGUgcHJvdmlkZXIgdGhhdCB1c2VzIHRoZSB3aW5kb3dGYWN0b3J5IGZ1bmN0aW9uIGZvciByZXR1cm5pbmcgdGhlIG5hdGl2ZSB3aW5kb3cgb2JqZWN0LlxuICovXG5leHBvcnQgY29uc3Qgd2luZG93UHJvdmlkZXI6IEZhY3RvcnlQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogV0lORE9XLFxuICB1c2VGYWN0b3J5OiB3aW5kb3dGYWN0b3J5LFxuICBkZXBzOiBbV2luZG93UmVmLCBQTEFURk9STV9JRF1cbn07XG5cbi8qKlxuICogQ3JlYXRlIGFuIGFycmF5IG9mIHByb3ZpZGVycy5cbiAqL1xuZXhwb3J0IGNvbnN0IFdJTkRPV19QUk9WSURFUlMgPSBbYnJvd3NlcldpbmRvd1Byb3ZpZGVyLCB3aW5kb3dQcm92aWRlcl07XG4iXX0=