export class IsEmptyValueConverter {
    toView(modelValue: any) {
        return modelValue == null || modelValue == "";
    }

    fromView(viewValue: any): any {
        return null;
    }
}