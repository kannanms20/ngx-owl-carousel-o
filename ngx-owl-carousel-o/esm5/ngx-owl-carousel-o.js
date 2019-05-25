/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { CarouselModule, CarouselComponent, CarouselSlideDirective, SlidesOutputData, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective, OwlOptions } from './index';
export { StageComponent as ɵx } from './lib/carousel/stage/stage.component';
export { AnimateService as ɵt } from './lib/services/animate.service';
export { AutoHeightService as ɵu } from './lib/services/autoheight.service';
export { AutoplayService as ɵd } from './lib/services/autoplay.service';
export { CarouselService as ɵb } from './lib/services/carousel.service';
export { BrowserDocumentRef as ɵn, DOCUMENT as ɵl, DOCUMENT_PROVIDERS as ɵr, DocumentRef as ɵm, browserDocumentProvider as ɵp, documentFactory as ɵo, documentProvider as ɵq } from './lib/services/document-ref.service';
export { HashService as ɵv } from './lib/services/hash.service';
export { LazyLoadService as ɵs } from './lib/services/lazyload.service';
export { OwlLogger as ɵc } from './lib/services/logger.service';
export { NavigationService as ɵa } from './lib/services/navigation.service';
export { ResizeService as ɵw } from './lib/services/resize.service';
export { BrowserWindowRef as ɵg, WINDOW as ɵe, WINDOW_PROVIDERS as ɵk, WindowRef as ɵf, browserWindowProvider as ɵi, windowFactory as ɵh, windowProvider as ɵj } from './lib/services/window-ref.service';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW93bC1jYXJvdXNlbC1vLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW93bC1jYXJvdXNlbC1vLyIsInNvdXJjZXMiOlsibmd4LW93bC1jYXJvdXNlbC1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxnS0FBYyxTQUFTLENBQUM7QUFFeEIsT0FBTyxFQUFDLGNBQWMsSUFBSSxFQUFFLEVBQUMsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRSxPQUFPLEVBQUMsY0FBYyxJQUFJLEVBQUUsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxpQkFBaUIsSUFBSSxFQUFFLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsZUFBZSxJQUFJLEVBQUUsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxlQUFlLElBQUksRUFBRSxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGtCQUFrQixJQUFJLEVBQUUsRUFBQyxRQUFRLElBQUksRUFBRSxFQUFDLGtCQUFrQixJQUFJLEVBQUUsRUFBQyxXQUFXLElBQUksRUFBRSxFQUFDLHVCQUF1QixJQUFJLEVBQUUsRUFBQyxlQUFlLElBQUksRUFBRSxFQUFDLGdCQUFnQixJQUFJLEVBQUUsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xOLE9BQU8sRUFBQyxXQUFXLElBQUksRUFBRSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGVBQWUsSUFBSSxFQUFFLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsU0FBUyxJQUFJLEVBQUUsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBQyxpQkFBaUIsSUFBSSxFQUFFLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsYUFBYSxJQUFJLEVBQUUsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxnQkFBZ0IsSUFBSSxFQUFFLEVBQUMsTUFBTSxJQUFJLEVBQUUsRUFBQyxnQkFBZ0IsSUFBSSxFQUFFLEVBQUMsU0FBUyxJQUFJLEVBQUUsRUFBQyxxQkFBcUIsSUFBSSxFQUFFLEVBQUMsYUFBYSxJQUFJLEVBQUUsRUFBQyxjQUFjLElBQUksRUFBRSxFQUFDLE1BQU0sbUNBQW1DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEdlbmVyYXRlZCBidW5kbGUgaW5kZXguIERvIG5vdCBlZGl0LlxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQge1N0YWdlQ29tcG9uZW50IGFzIMm1eH0gZnJvbSAnLi9saWIvY2Fyb3VzZWwvc3RhZ2Uvc3RhZ2UuY29tcG9uZW50JztcbmV4cG9ydCB7QW5pbWF0ZVNlcnZpY2UgYXMgybV0fSBmcm9tICcuL2xpYi9zZXJ2aWNlcy9hbmltYXRlLnNlcnZpY2UnO1xuZXhwb3J0IHtBdXRvSGVpZ2h0U2VydmljZSBhcyDJtXV9IGZyb20gJy4vbGliL3NlcnZpY2VzL2F1dG9oZWlnaHQuc2VydmljZSc7XG5leHBvcnQge0F1dG9wbGF5U2VydmljZSBhcyDJtWR9IGZyb20gJy4vbGliL3NlcnZpY2VzL2F1dG9wbGF5LnNlcnZpY2UnO1xuZXhwb3J0IHtDYXJvdXNlbFNlcnZpY2UgYXMgybVifSBmcm9tICcuL2xpYi9zZXJ2aWNlcy9jYXJvdXNlbC5zZXJ2aWNlJztcbmV4cG9ydCB7QnJvd3NlckRvY3VtZW50UmVmIGFzIMm1bixET0NVTUVOVCBhcyDJtWwsRE9DVU1FTlRfUFJPVklERVJTIGFzIMm1cixEb2N1bWVudFJlZiBhcyDJtW0sYnJvd3NlckRvY3VtZW50UHJvdmlkZXIgYXMgybVwLGRvY3VtZW50RmFjdG9yeSBhcyDJtW8sZG9jdW1lbnRQcm92aWRlciBhcyDJtXF9IGZyb20gJy4vbGliL3NlcnZpY2VzL2RvY3VtZW50LXJlZi5zZXJ2aWNlJztcbmV4cG9ydCB7SGFzaFNlcnZpY2UgYXMgybV2fSBmcm9tICcuL2xpYi9zZXJ2aWNlcy9oYXNoLnNlcnZpY2UnO1xuZXhwb3J0IHtMYXp5TG9hZFNlcnZpY2UgYXMgybVzfSBmcm9tICcuL2xpYi9zZXJ2aWNlcy9sYXp5bG9hZC5zZXJ2aWNlJztcbmV4cG9ydCB7T3dsTG9nZ2VyIGFzIMm1Y30gZnJvbSAnLi9saWIvc2VydmljZXMvbG9nZ2VyLnNlcnZpY2UnO1xuZXhwb3J0IHtOYXZpZ2F0aW9uU2VydmljZSBhcyDJtWF9IGZyb20gJy4vbGliL3NlcnZpY2VzL25hdmlnYXRpb24uc2VydmljZSc7XG5leHBvcnQge1Jlc2l6ZVNlcnZpY2UgYXMgybV3fSBmcm9tICcuL2xpYi9zZXJ2aWNlcy9yZXNpemUuc2VydmljZSc7XG5leHBvcnQge0Jyb3dzZXJXaW5kb3dSZWYgYXMgybVnLFdJTkRPVyBhcyDJtWUsV0lORE9XX1BST1ZJREVSUyBhcyDJtWssV2luZG93UmVmIGFzIMm1Zixicm93c2VyV2luZG93UHJvdmlkZXIgYXMgybVpLHdpbmRvd0ZhY3RvcnkgYXMgybVoLHdpbmRvd1Byb3ZpZGVyIGFzIMm1an0gZnJvbSAnLi9saWIvc2VydmljZXMvd2luZG93LXJlZi5zZXJ2aWNlJzsiXX0=