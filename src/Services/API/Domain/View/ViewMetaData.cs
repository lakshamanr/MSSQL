namespace API.Domain.View
{
    public class ViewMetaData
    {
       public IEnumerable<ViewProperties> viewProperties { get;set;}
        public IEnumerable<ViewDetails> viewDetails { get;set;}
        public IEnumerable<ViewDependancy> viewDependancies { get;set;}
        public ViewCreateScript viewCreateScript { get;set;}
        public IEnumerable<ViewColumns> viewColumns { get;set;}
    }
}
